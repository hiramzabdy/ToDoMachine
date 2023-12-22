import { ReactComponent as CheckSVG} from "./icons/check.svg"
import { ReactComponent as DeleteSVG} from "./icons/delete.svg"
import "./ToDoIcon.css"

const iconsTypes = {
    "complete": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>
}

function ToDoIcon({type, color, onClick}){
    return(
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconsTypes[type](color)}
        </span>
    )
}

export { ToDoIcon }