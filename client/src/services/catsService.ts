import axios from 'axios';
import { Cat, NewCat } from '../models/Cat';

const API_URL = 'http://localhost:8000'; 

export async function getCats(): Promise<Cat[]> {
  const response = await axios.get(`${API_URL}/cats/`);
  console.log(response.data.data)
  return response.data.data;
}

export async function createCat(cat: NewCat): Promise<void> {
  try {
    const response = await axios.post(`${API_URL}/cats/`, cat);
    if(response){
      return(response)
    }
  } catch (error) {
    console.error("Error creating cat:", error);
    // Manejar el error según corresponda
    throw error; // O devuelve una respuesta personalizada
  }
}

export async function updateCat(catId: string, cat: Cat): Promise<void> {
  await axios.put(`${API_URL}/cats/${catId}`, cat);
}

export async function deleteCat(catId: string): Promise<void> {
  console.log(catId)
  await axios.delete(`${API_URL}/cats/${catId}`);
}

export const getCatById = async (id: number): Promise<Cat | null> => {
  try {
    const response = await axios.get(`/api/cats/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving cat by ID:", error);
    return null;
  }
};
