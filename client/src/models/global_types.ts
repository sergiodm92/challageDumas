import { Cat } from "./Cat";
import { Image, Favorite } from "./image";

export interface Redux_State {
    cats: Cat[];
    message: string;
    images: Image[];
    favoutites:Favorite[]
  }

  export interface GetCatsAction {
    type: "GET_CATS";
    payload: Cat[];
  }
  
  export interface CreateCatAction {
    type: "CREATE_CAT";
    payload: Cat;
  }
  export interface DeleteCatAction {
    type: "DELETE_CAT";
    payload: Cat;
  }
  export interface GetRandomImagesAction {
    type: "GET_RANDOM_IMAGES";
    payload: Image[];
  }
  export interface AddFavourite {
    type: "ADD_FAVOURITE";
    payload: Image;
  }
  export interface RemoveFavourite {
    type: "REMOVE_FAVOURITE";
    payload: Image;
  }

  export interface GetFavourites {
    type: "GET_FAVOURITES";
    payload: Favorite[];
  }
  
  export type Action = GetCatsAction | CreateCatAction | DeleteCatAction | GetRandomImagesAction |AddFavourite | RemoveFavourite | GetFavourites;