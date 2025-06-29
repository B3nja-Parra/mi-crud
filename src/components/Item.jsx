import React from 'react'; // Importa React para poder usar JSX

function Item({ item, deleteItem, editItem }) {
  return (
    <li className="item"> {/* Cada alumno se representa como un elemento */}
      
      <div className="item-info"> {/* Contenedor de la información del alumno */}
        <p><strong>Alumno:</strong> <strong>{item.nombre}</strong></p> 
        <p>Asignatura: {item.asignatura}</p> 
        <p>Promedio: <strong>{item.promedio}</strong> </p> 
        <p className='apreciacion-color'>{item.apreciacion}</p> 
      </div>

      <div className="item-actions"> {/* Contenedor de los botones de acción */}

        <button onClick={() => editItem(item)} className="btn edit-btn">Editar</button>

        {/* Botón para eliminar*/}
        <button onClick={() => deleteItem(item.id)} className="btn delete-btn">Eliminar</button>
      </div>
      
    </li>
  );
}

export default Item; 

