import { handleActions } from "redux-actions";
import * as types from "../constants";

export const initialState = {
  animals: [],
  features: [],
  pets: [],
  contacts: [],
  animal: {},
  pet: {}
};

const app = handleActions(
  {
    [types.GET_ANIMALS_LIST]: (state, action) => {
      var resp_data = { ...state };
      var resp = Object.assign(resp_data, action.payload.data);
      return resp;
    },
    [types.GET_FEATURES_LIST]: (state, action) => {
      var resp = action.payload.data;
      return resp;
    },
    [types.GET_PETS_LIST]: (state, action) => {
      var resp_data = { ...state };
      var resp = Object.assign(resp_data, action.payload.data);
      return resp;
    },
    [types.GET_CONTACTS_LIST]: (state, action) => {
      var resp_data = { ...state };
      var resp = Object.assign(resp_data, action.payload.data);
      return resp;
    },
    [types.GET_ANIMAL]: (state, action) => {
      var resp = action.payload.data;
      return resp;
    },
    [types.GET_PET]: (state, action) => {
      var resp_data = { ...state };
      var resp = Object.assign(resp_data, action.payload.data);
      return resp;
    }
  },
  initialState
);

export default app;
