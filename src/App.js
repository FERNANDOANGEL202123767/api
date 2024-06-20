import React, { useState, useEffect } from 'react';
import FormularioCancion from './components/FormularioCancion';
import ListaCanciones from './components/ListaCanciones';
import { getCanciones, createCancion, deleteCancion, updateCancion } from './api';
import './App.css';

const App = () => {
  const [canciones, setCanciones] = useState([]);
  const [cancionEditada, setCancionEditada] = useState(null);

  useEffect(() => {
    cargarCanciones();
  }, []);

  const cargarCanciones = async () => {
    try {
      const response = await getCanciones();
      setCanciones(response.data);
    } catch (error) {
      console.error('Error al cargar las canciones:', error);
    }
  };

  const eliminarCancion = async (id) => {
    try {
      await deleteCancion(id);
      cargarCanciones();
    } catch (error) {
      console.error('Error al eliminar la canción:', error);
    }
  };

  const editarCancion = (cancion) => {
    setCancionEditada(cancion);
  };

  const registrarCancion = async (nuevaCancion) => {
    try {
      await createCancion(nuevaCancion);
      cargarCanciones();
    } catch (error) {
      console.error('Error al registrar la canción:', error);
    }
  };

  const actualizarCancion = async (id, cancionActualizada) => {
    try {
      await updateCancion(id, cancionActualizada);
      cargarCanciones();
    } catch (error) {
      console.error('Error al actualizar la canción:', error);
    } finally {
      setCancionEditada(null);
    }
  };

  return (
    <div className="App">
      <h1>Registra tu Cancion Fav</h1>
      <div className="contenedor">
        <FormularioCancion
          cancionEditada={cancionEditada}
          setCancionEditada={setCancionEditada}
          registrarCancion={registrarCancion}
          actualizarCancion={actualizarCancion}
        />
        <ListaCanciones
          canciones={canciones}
          eliminarCancion={eliminarCancion}
          editarCancion={editarCancion}
        />
      </div>
    </div>
  );
};

export default App;
