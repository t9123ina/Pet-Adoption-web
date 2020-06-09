import axios from "axios";
import { API } from "./index";

export const getAnimals = () => {
  return axios({
    method: "GET",
    url: `${API}/animals/`
  });
};

export const getPets = query => {
  return axios({
    method: "GET",
    url: `${API}/pets/`,
    params: query
  });
};

export const getFeatures = () => {
  return axios({
    method: "GET",
    url: `${API}/features/`
  });
};

export const getContacts = () => {
  return axios({
    method: "GET",
    url: `${API}/contacts/`
  });
};