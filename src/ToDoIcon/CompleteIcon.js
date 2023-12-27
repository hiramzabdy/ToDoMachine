import React from "react";
import { ToDoIcon } from "."

function CompleteIcon({completed, onCompleted}){
    return(
        <ToDoIcon
            type="complete"
            color={completed? "green" : "gray"}
            onClick={onCompleted}
        />
    )
}

export {CompleteIcon}