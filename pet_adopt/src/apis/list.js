import axios from "axios";
import { API } from "./index";

export const getAnimals = () => {
  return axios({
    method: "GET",
    url: `${API}/animals/`
  });
};

export const getPets = () => {
  return axios({
    method: "GET",
    url: `${API}/pets/`
  });
};

export const getFeatures = () => {
  return axios({
    method: "GET",
    url: `${API}/features/`
  });
};
