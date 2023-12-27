import "./ToDoSearch.css"
import React from "react"

function ToDoSearch({searchValue, setSearchValue}){
    return(
      <input
      placeholder="Task to search..."
      className="ToDoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}>
      </input>
    )
}

export { ToDoSearch }