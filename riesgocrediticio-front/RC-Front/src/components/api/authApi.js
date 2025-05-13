import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const login = async (username, password) => {
  return await axios.get(`${API_URL}/login`, {
    params: { username, password },
  });
};

export const register = async (user) => {
  return await axios.post(`${API_URL}/register`, user);
};
