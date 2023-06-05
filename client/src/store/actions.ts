import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Cat, NewCat } from "../models/Cat";
import { Action } from "../models/global_types";

//-----------GATOS--------------

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

//-----------IMAGES--------------

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