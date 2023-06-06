import { Redux_State } from "../models/global_types";

const initialState: Redux_State = {
  cats: [],
  message: "",
  images: [],
  favoutites: [],
  cat: {  name: "", breed: "", age: 0, photo_url: "" },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_CATS":
      return {
        ...state,
        cats: action.payload,
      };
      case "GET_CAT_BY_ID":
      return {
        ...state,
        cat: action.payload,
      };
    case "CREATE_CAT":
      return {
        ...state,
        message: action.payload,
      };
    case "GET_RANDOM_IMAGES":
      return {
        ...state,
        images: action.payload,
      };
    case "ADD_FAVOURITE":
      return {
        ...state,
        message: action.payload,
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        message: action.payload,
      };
    case "GET_FAVOURITES":
      return {
        ...state,
        favoutites: action.payload,
      };
      case "UPDATE_CAT":
        return {
          ...state,
          message: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
