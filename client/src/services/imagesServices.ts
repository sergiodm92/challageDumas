import axios from 'axios';
import { Image } from '../models/image';

const API_URL = 'https://api.thecatapi.com/v1'; // Cambiar con la URL correcta de TheCatAPI

export async function getRandomImages(): Promise<Image[]> {
  const response = await axios.get(`${API_URL}/images/search?limit=10`);
  return response.data;
}

