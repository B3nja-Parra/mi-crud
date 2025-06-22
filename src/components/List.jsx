
import React from 'react';

import Item from './Item'   // Importa el componente individual



function List({items,deleteItem, editItem}){

    return (

        <ul>
            {/* Recorre el arreglo de ítems y renderiza uno por uno */}
            {items.map((item)=>(

                <Item

                key={item.id}

                item={item}

                deleteItem={deleteItem}

                editItem={editItem}

                />

            ))}

        </ul>

    );

}



export default List;


