
function Filter({onSetFilter, filterBy}) {

  return(
    <div id="filter-div">
      <button onClick={onSetFilter} id="good-dog-filter">Filter good dogs: {filterBy ? "ON" : "OFF"}</button>
    </div>
  )
}

export default Filter;
