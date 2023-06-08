import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Cat, NewCat } from "../models/Cat";
import { Action } from "../models/global_types";

//-----------GATOS--------------

//action que trae todos los gatos     const getCats = async()=>{}
export const getCats = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await axios.get(`/cats/`);
      return dispatch({
        type: "GET_CATS",
        payload: response.data.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//action que trae un gato por id
export const getCatById = (cat_id:string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await axios.get(`/cats/${cat_id}`);
      return dispatch({
        type: "GET_CAT_BY_ID",
        payload: response.data.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//action para crear un nuevo gato y guardarlo en la base de datos
export const createCat = (cat: NewCat) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: AxiosResponse<Cat> = await axios.post(`/cats/`, cat);
      return dispatch({
        type: "CREATE_CAT",
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//action para eliminar un gato que esta guardado en la base de datos
export const deleteCat = (catId: String) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const json = await axios.delete(`/cats/${catId}`)
      return dispatch({
        type: "DELETE_CAT",
        payload: json.data.data
      })
    }
    catch (error) {
      console.log(error);
    }
  };
};

//action para eliminar un gato que esta guardado en la base de datos
export const updateCat = (data:NewCat, cat_id:string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const json = await axios.put(`/cats/${cat_id}`,data)
      return dispatch({
        type: "UPDATE_CAT",
        payload: json.data.data
      })
    }
    catch (error) {
      console.log(error);
    }
  };
};
//-----------IMAGES--------------

//action que trae 10 imagenes aleatorias
export const getRandomImages = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await axios.get(`/images/`);
      return dispatch({
        type: "GET_RANDOM_IMAGES",
        payload: response.data.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//action para agregar una imagen a favoritos
export const addFavourites = (image_id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const json = {image_id: image_id}
      const response: any= await axios.post(`/images/favourites/`, json);
      return dispatch({
        type: "ADD_FAVOURITE",
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//action para traer todas las imagenes que estan en favoritos
export const getFavourites = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any= await axios.get(`/images/favourites/`);
      return dispatch({
        type: "GET_FAVOURITES",
        payload: response.data.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//action que remueve un favorito
export const removeFavourites = (image_id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const json = {image_id: image_id}
      const response: any= await axios.post(`/images/remove_favourite/`, json);
      return dispatch({
        type: "REMOVE_FAVOURITE",
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};