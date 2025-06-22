
import React from 'react';



function Item({item, deleteItem, editItem}){

    return (

        <li>
            {/* Muestra el valor del ítem */}
            {item.value}

            {/* Botón para editar: llama a editItem pasando todo el objeto item */}
            <button onClick={()=>editItem(item)}>Editar</button>

            {/* Botón para eliminar: llama a deleteItem con el id del ítem */}
            <button onClick={()=>deleteItem(item.id)}>Eliminar</button>

        </li>

    );

}



export default Item;




