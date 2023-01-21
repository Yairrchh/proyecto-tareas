import React from "react";
import './TodoList.css'

function TodoList(props){
    return(
        <section> 
            <ul> 
                {props.children} 
            </ul>
        </section> // con la propiedad .children le estamos mandando la iteracion de todo item
    );
}

export { TodoList };