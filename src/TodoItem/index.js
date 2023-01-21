import React from "react";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import './TodoItem.css'

function TodoItem(props){

    const onComplete = () => {
        alert('Ya completaste la tarea ' + props.text);
    }


    return(
        <li className="TodoItem">
            <CompleteIcon
                complete={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.complete} && 'TodoItem-p--complete'`}
            >
                {props.text}
            </p>
            <DeleteIcon
            onDelete={props.onDelete}/>
        </li>
    );
}

export { TodoItem };