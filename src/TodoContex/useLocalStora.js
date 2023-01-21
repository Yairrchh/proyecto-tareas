import React from "react";

function useLocalStorage(itemName, initialValue) { // usamos nuestro custon reacthock para limpiar nuestro codigo
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue); // Creando estado para nuestros Todos
   
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);//llamar a localStorage
        let parsedItem; //variable es lo que voy a enviarle a useState
      
        if(!localStorageItem) { //entramos a localStoreTodos para verificar si no existe
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //creamos un por defecto y le decimos que sera un string vacio son JSON.stringify
          parsedItem = initialValue;
        } else { //si ya hay algun todo
          parsedItem = JSON.parse(localStorageItem) //JSON.parse es para convertirlo a un objeto de JAvascript comun y corriente
        }
        setItem(parsedItem);
        setLoading(false);
        } catch (error) {
        setError(error);
        }
      }, 1000)
    })
  
    const saveItem = (newItem) => { //Vamos a crear una funcion para guardar nuestros todos
      try {
        const stringifiedItem = JSON.stringify(newItem); //vamos a convertir en string todos nuestros todos 
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      } catch (error) {
        setError(error)
      }
    }
  
    return {
      item, // retornamos ese array en nuestro customhock los vamos a resivir en nuestro componentes 'cons [todos, savetodos] = ' 
      saveItem,
      loading,
      error,
    };
  }

  export{ useLocalStorage };