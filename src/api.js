import axios from 'axios';

// const API_URL = 'https://968a-2605-59c8-7146-110-752e-ee9e-bfe8-d347.ngrok-free.app/api-traks';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api-traks';


export const getCanciones = () => {
  return axios.get(`${API_URL}/get-mostrartodo`, {
    headers: {
      'ngrok-skip-browser-warning': 'true'
    }});
};

export const createCancion = (cancion) => {
  return axios.post(`${API_URL}/guardar-track`, cancion);
};

export const updateCancion = (id, cancion) => {
  return axios.put(`${API_URL}/update-track/${id}`, cancion);
};

export const deleteCancion = (id) => {
  return axios.delete(`${API_URL}/eliminar/${id}`);
};
