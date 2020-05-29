import { handleActions } from "redux-actions";
import * as types from "../constants";

export const initialState = {
  animals: [],
  features: [],
  pets: []
};

const app = handleActions(
  {
    [types.GET_ANIMALS_LIST]: (state, action) => {
      var resp = action.payload;
      return resp;
    },
    [types.GET_FEATURES_LIST]: (state, action) => {
      var resp = action.payload.data;
      return resp;
    },
    [types.GET_PETS_LIST]: (state, action) => {
      console.log(action);
      var resp = action.payload.data;
      return resp;
    }
  },
  initialState
);

export default app;
