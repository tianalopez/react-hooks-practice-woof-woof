
function Dogbar({dogs, onClick}) {
  //clicking dog
  const handleClick = (dog) => {
    onClick(dog.id)
  }
  const dogIcon = dogs.map((dog) => (
    <span onClick={() => handleClick(dog)} key={dog.name}>{dog.name}</span>
  ))

  return(
    <div id="dog-bar">
      {dogIcon}
    </div>
  )
}

export default Dogbar;
