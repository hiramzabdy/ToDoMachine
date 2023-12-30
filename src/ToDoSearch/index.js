import { ToDoContext } from "../Context/Context"
import "./ToDoSearch.css"
import React from "react"

function ToDoSearch(){

    const { searchValue, setSearchValue } = React.useContext(ToDoContext)

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