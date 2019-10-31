import jwtDecode from "jwt-decode";

export const TOKEN_KEY = "@IronhackFinal-Token";
export const isAuthenticated = role => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token !== null) {
    const tokenPayload = jwtDecode(token);
    return tokenPayload.role.includes(role);
  } else {
    return false;
  }
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export const getUser = ()=> jwtDecode(getToken());

