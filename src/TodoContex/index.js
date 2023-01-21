import React from "react";
import { useLocalStorage } from "./useLocalStora";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('')//llamando al estado para pasarlo al componente TodoSearch
      
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;// filtrando nuestro todos para ver cual tiene la propiedad true
      const totalTodos = todos.length;//filtrando nuestros todos totales para compararlos con los completados
    
      let searchdTodos = [];//Creando un array para ver si nuestro serch value la longitud es mayor o igual a 1
    
      if(!searchValue.length >=1 ) { //vemos cuantas letras han escrito en serchValue
        searchdTodos = todos;// si no es cierto va a seguir igual al valor anterior
      } else {
        searchdTodos = todos.filter( todo => {
          const todoText = todo.text.toLowerCase(); // con lower case cambiamos todo a minusculas para asi compararlos
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText); // con includes tenemos el criterio de busqueda a ver si incluye parametros
    });  
      }
    
    const addTodo = (text) => { //Metodo para marcar como completado un todos | Tenemos que saber la posicion para asi eliminar o marcar como completadp    
        const newTodos = [...todos]; // Creamos una lista y le pasamos todos los todos que teniamos antes
        newTodos.push({
            completed: false,
            text,
        }) //entramos a esa posicion le decimos que es true 
        saveTodos(newTodos); // aqui llamamos a saveTodos en ves de setItem
    }
      // vamos a marcar como completado los todos
        const completeTodo = (text) => { //Metodo para marcar como completado un todos | Tenemos que saber la posicion para asi eliminar o marcar como completadp
        const todoIndex = todos.findIndex(todo => todo.text === text); //con esta funcion estamos examinando todos por todos cual tiene exactamente el mismo texto para saber la posicion 
    
        const newTodos = [...todos]; // Creamos una lista y le pasamos todos los todos que teniamos antes
    
        newTodos[todoIndex].completed = true; //entramos a esa posicion le decimos que es true 
        saveTodos(newTodos); // aqui llamamos a saveTodos en ves de setItem
      }
      // vamos a eliminar los todos que deseemos
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos]; 
    
      newTodos.splice(todoIndex, 1); 
        saveTodos(newTodos);
      }

      // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, 
      //que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            setSearchValue,
            searchValue,
            searchdTodos, 
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}            // Exportamos nuestro proveedor y nuestro contexto,
// en el context también esta el consumer, para acceder a nuestro contexto

export { TodoContext, TodoProvider };
