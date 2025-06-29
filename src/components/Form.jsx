import React, { useState, useEffect } from 'react'; // Importa React y los hooks necesarios.

function Form({ addOrUpdateItem, itemToEdit }) { // Componente que recibe una función y el objeto a editar.
  const [formData, setFormData] = useState({ 
    nombre: '',
    asignatura: '',
    promedio: ''
  });

  useEffect(() => { // Actualiza el campo del formulario si hay un item para editar
    if (itemToEdit) {
      setFormData({
        nombre: itemToEdit.nombre,
        asignatura: itemToEdit.asignatura,
        promedio: itemToEdit.promedio.toString() // Convierte el número en string para el input
      });
    } else {
      setFormData({ nombre: '', asignatura: '', promedio: '' }); // Resetea si no hay nada que editar
    }
  }, [itemToEdit]); 

  const handleChange = (e) => { // Maneja los cambios en los inputs
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = (e) => { // Maneja el envío del formulario
    e.preventDefault(); // (refrescar la página)

    // Validación básica: campos vacíos
    if (
      formData.nombre.trim() === '' ||
      formData.asignatura.trim() === '' ||
      formData.promedio.trim() === ''
    ) {
      alert('Por favor, completa todos los campos.'); // Alerta si hay campos vacíos
      return;
    }

    // Validación del promedio
    const promedio = parseFloat(formData.promedio); 
    if (isNaN(promedio) || promedio < 1 || promedio > 7) {
      alert('El promedio debe ser un número entre 1.0 y 7.0'); // Alerta si el promedio no es válido
      return;
    }

    addOrUpdateItem(formData); 
    setFormData({ nombre: '', asignatura: '', promedio: '' }); 
  };

  return (
    <form onSubmit={handleSubmit}> {/* Formulario que ejecuta handleSubmit al enviar */}

      {/* Campo de entrada para el nombre */}
      <label htmlFor="nombre">Nombre del alumno:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      {/* Campo de entrada para la asignatura */}
      <label htmlFor="asignatura">Asignatura:</label>
      <input
        type="text"
        id="asignatura"
        name="asignatura"
        value={formData.asignatura}
        onChange={handleChange}
      />

      {/* Campo de entrada para el promedio */}
      <label htmlFor="promedio">Promedio (0.0 - 7.0):</label>
      <input
        type="number"
        id="promedio"
        name="promedio"
        step="0.1"
        value={formData.promedio}
        onChange={handleChange}
      />

      {/* Botón de envío que cambia según si se edita o se agrega */}
      <button type="submit" className='boton-agregar'>
        {itemToEdit ? 'Actualizar' : 'Agregar Evaluación'}
      </button>
    </form>
  );
}

export default Form; 