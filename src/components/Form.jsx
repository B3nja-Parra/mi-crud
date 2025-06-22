import React, { useState, useEffect } from 'react';



function Form({ addOrUpdateItem, itemToEdit }) {

    const [inputValue, setInputValue] = useState('');


    // Actualiza el campo del formulario si hay un item para editar
    useEffect(() => {

        if (itemToEdit) {

            setInputValue(itemToEdit.value);    // Llena el input con el valor actual

        } else {

            setInputValue('');      // Limpia el input si no se está editando

        }

    }, [itemToEdit]);



    const handleSubmit = (e) => {

        e.preventDefault();     // Previene recarga de página

        if (inputValue.trim()) {

            addOrUpdateItem(inputValue);        // Llama función para agregar o actualizar

            setInputValue('');          // Limpia el input luego de guardar

        }

    };


    // Muestra un formulario con un input y un botón para agregar o editar un ítem
    return (        

        <form onSubmit={handleSubmit}>

            <input

                type="text"

                value={inputValue}

                onChange={(e) => setInputValue(e.target.value)}

            />

            <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>

        </form>

    );

}



export default Form;
