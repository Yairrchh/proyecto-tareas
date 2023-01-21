import React from "react";
import { TodoProvider } from "../TodoContex";
import { AppUI } from "./AppUI";

/*import './App.css'; */

/* const DefauldTodos =  [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Cortar Pimenton', completed: false},
  { text: 'Cortar Tomates', completed: true},
  { text: 'Cocinar', completed: false}, 
] */


function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
