import { createAction } from "redux-actions";
import * as types from "../constants";
import { getAnimals, getPets, getFeatures } from "../apis/list";

export const getAnimalsList = createAction(types.GET_ANIMALS_LIST, getAnimals);

export const getPetsList = createAction(types.GET_PETS_LIST, getPets);

export const getFeaturesList = createAction(
  types.GET_FEATURES_LIST,
  getFeatures
);
