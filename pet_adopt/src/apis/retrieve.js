import axios from "axios";
import { API } from "./index";

export const retrieveAnimals = id => {
  return axios({
    method: "GET",
    url: `${API}/animals/${id}/`
  });
};

export const retrievePets = id => {
  return axios({
    method: "GET",
    url: `${API}/pets/${id}/`
  });
};

export const retrieveFeatures = id => {
  return axios({
    method: "GET",
    url: `${API}/features/${id}/`
  });
};
