import React from "react";
import { TodoContext } from "../TodoContex";
import './style.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe una nueva tarea!</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe una nueva Tarea!"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TpdoForm-button--cancel"
                onClick={onCancel}
                >
                    Calcelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button-add"
                >
                    anadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm};