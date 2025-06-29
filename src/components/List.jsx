import React from 'react';
import Item from './Item';  // Importa el componente individual

function List({ items, deleteItem, editItem }) { 
  return (
    <ul> 
        {/* Recorre el arreglo de ítems y renderiza uno por uno */}
      {items.map(item => ( 
        <Item
          key={item.id} // Asigna clave única por cada alumno 
          item={item} // Pasa el objeto del alumno al componente Item
          deleteItem={deleteItem} // Pasa la función para eliminar
          editItem={editItem} // Pasa la función para editar
        />
      ))}
    </ul>
  );
}

export default List; 
