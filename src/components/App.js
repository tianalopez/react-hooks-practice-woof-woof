import React, {useState, useEffect} from "react";
import Filter from "./Filter"
import Dogbar from "./Dogbar";
import Dogcontainer from "./Dogcontainer";

function App() {
  //states
  const [dogs, setDogs] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(null)
  const [filterBy, setFilterBy] = useState(false);


  //grab dog info
  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then((data) => setDogs(data))
    .catch(err => alert(err))
  }, [])
  //set filter status
  const onSetFilter = () => {
    setFilterBy((status) => !status)
  }
  //only show filtered dogs
  const filteredDogs = dogs.filter((dog) => (
    filterBy ? dog.isGoodDog === true: dog
  ))


  //show each dog when clicked
  const onClick = (dogId) => {
    setSelectedDogId((dog) => dogId)
  }

  //filter for just the one dog with the id
  const selectedDog = dogs.find((dog) => (
    dog.id === selectedDogId
  ))


  return (
    <div className="App">
      <Filter onSetFilter={onSetFilter} filterBy={filterBy}/>
      <Dogbar dogs={filteredDogs} onClick={onClick}/>
      {selectedDogId ? <Dogcontainer dog={selectedDog}/>: null}
    </div>
  );
}

export default App;
