
import { useState, useEffect }  from 'react';



import Form from './components/Form';

import List from './components/List';

import './App.css';



function App(){

  const [items,setItems]=useState([]);

  const [itemToEdit, setItemToEdit]=useState(null);


   // Cargar los ítems almacenados al iniciar la app
  useEffect(()=>{

    const storedItems=

    JSON.parse(localStorage.getItem('items')) || [];

    setItems(storedItems);

  },[]);


  // Guardar ítems en localStorage cada vez que cambien
  useEffect(()=>{

    localStorage.setItem('items',JSON.stringify(items));

  }, [items]);



  const addOrUpdateItem=(value)=>{

    // Editar ítem existente
    if(itemToEdit){

      setItems(items.map(item=>item.id===itemToEdit.id ? {...item, value} : item));

      setItemToEdit(null);

    } else {

      // Agregar nuevo ítem
      setItems([...items, {id: Date.now(),value}]);

    }

  };



  const deleteItem=(id)=>{

    // Eliminar ítem por ID
    setItems(items.filter(item=>item.id!==id));

  };



  const editItem=(item)=>{

    // Seleccionar ítem para editar
    setItemToEdit(item);

  };


  // Muestra el título, el formulario y la lista de ítems
  return (

    <div className="App">

      <h1>CRUD con LocalStorage</h1>

      <Form 

      addOrUpdateItem={addOrUpdateItem}

      itemToEdit={itemToEdit} />

      <List items={items}

      deleteItem={deleteItem} editItem={editItem} />

      </div>

  );



}



export default App;
