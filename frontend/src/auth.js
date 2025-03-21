// Basit login/logout kontrol fonksiyonları
export const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null;
  };
  
  export const login = (username, password) => {
    const token = btoa(`${username}:${password}`);
    localStorage.setItem("authToken", token);
  };
  
  export const logout = () => {
    localStorage.removeItem("authToken");
  };
  