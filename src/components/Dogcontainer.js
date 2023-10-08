import React, {useState, useEffect} from "react"
function Dogcontainer({dog}) {
  const [goodStatus, setGoodStatus] = useState(dog.isGoodDog)

  //update the goodDog status when clicking a new dog
  useEffect(() => {
    if (goodStatus !== dog.isGoodDog) {
      setGoodStatus((status) => dog.isGoodDog)
    }
  }, [dog])
  //click function
  const handleClick = () => {
    const newGoodStatus = !goodStatus
    setGoodStatus((status) => newGoodStatus)

    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({"isGoodDog": newGoodStatus})
    })
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(err => alert(err))
  }


  return(
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={dog.image} alt={dog.name}></img>
        <h2>{dog.name}</h2>
        <button onClick={handleClick}>{goodStatus? "Good Dog!": "Bad Dog!"}</button>
      </div>
    </div>
  )
}
export default Dogcontainer;
