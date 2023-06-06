import { Cat, NewCat } from "./Cat";
import { Image, Favorite } from "./image";

export interface Redux_State {
    cats: Cat[];
    message: string;
    images: Image[];
    favoutites:Favorite[]
    cat: NewCat
  }

  export interface GetCatsAction {
    type: "GET_CATS";
    payload: Cat[];
  }

  export interface GetCatByIdAction {
    type: "GET_CAT_BY_ID";
    payload: NewCat;
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
  
  export interface EditCat {
    type: "EDIT_CAT";
    payload: Cat;
  }
  export interface UpdateCat {
    type: "UPDATE_CAT";
    payload: Cat;
  }
  
  export type Action = GetCatsAction | CreateCatAction | DeleteCatAction | GetRandomImagesAction |AddFavourite | RemoveFavourite | GetFavourites | EditCat | UpdateCat | GetCatByIdAction;