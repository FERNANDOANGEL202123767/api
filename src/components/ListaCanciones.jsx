import React from 'react';
import Swal from 'sweetalert2';

const ListaCanciones = ({ canciones, eliminarCancion, editarCancion }) => {
  if (!Array.isArray(canciones) || canciones.length === 0) {
    return <p>No hay canciones para mostrar.</p>;
  }

  const handleEliminar = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarCancion(id);
        Swal.fire('Eliminado!', 'Tu canción ha sido eliminada.', 'success');
      }
    });
  };

  return (
    <div className="lista-canciones">
      <ul>
        {canciones.map((cancion) => (
          <li key={cancion.id}>
            <p><strong>Título:</strong> {cancion.track}</p>
            <p><strong>Artista:</strong> {cancion.artista}</p>
            <p><strong>Género:</strong> {cancion.genero}</p>
            <div>
              <button onClick={() => editarCancion(cancion)} className="btn btn-warning mr-2">Editar</button>
              <button onClick={() => handleEliminar(cancion.id)} className="btn btn-danger">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCanciones;

