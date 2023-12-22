import "./ToDoItem.css"
import {CompleteIcon} from "./CompleteIcon.js"
import {DeleteIcon} from "./DeleteIcon.js"

function ToDoItem(props){
    return(
      <li className="ToDoItem">

        <CompleteIcon completed={props.completed} onCompleted={props.onCompleted}/>

        <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--completed"}`}>{props.text}</p>

        <DeleteIcon onDeleted={props.onDeleted}/>

      </li>
    )
}

export { ToDoItem }