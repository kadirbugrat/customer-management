import axios from "axios";

// Backend API URL
// Örneğin: http://localhost:8080/api
const API_BASE_URL = "http://localhost:8080/api";

// Axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Kullanıcı giriş yaptığında auth bilgilerini kaydet
export const setAuthHeader = (username, password) => {
  const token = btoa(`${username}:${password}`);
  localStorage.setItem("authToken", token);
  api.defaults.headers.common["Authorization"] = `Basic ${token}`;
};

// Sunucu tarafında Basic Auth doğrulaması
export const loginUser = () => api.get("/auth/login");

// Şifre değiştirme endpoint'i
export const changePassword = (data) => api.post("/auth/change-password", data);

// Müşteri CRUD fonksiyonları
export const getCustomers = () => api.get("/customers");
export const addCustomer = (customer) => api.post("/customers", customer);
export const getCustomerById = (id) => api.get(`/customers/${id}`);
export const updateCustomer = (id, customer) => api.put(`/customers/${id}`, customer);
export const deleteCustomer = (id) => api.delete(`/customers/${id}`);
