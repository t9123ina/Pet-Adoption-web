import { createAction } from "redux-actions";
import * as types from "../constants";
import { getAnimals, getPets, getFeatures, getContacts } from "../apis/list";
import { retrieveAnimals, retrievePets } from "../apis/retrieve";
export const getAnimalsList = createAction(types.GET_ANIMALS_LIST, getAnimals);

export const getPetsList = createAction(types.GET_PETS_LIST, getPets);

export const getFeaturesList = createAction(
  types.GET_FEATURES_LIST,
  getFeatures
);

export const getContactsList = createAction(
  types.GET_CONTACTS_LIST,
  getContacts
);

export const getPet = createAction(types.GET_PET, retrievePets);

export const getAnimal = createAction(types.GET_ANIMAL, retrieveAnimals);
