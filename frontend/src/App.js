import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddCustomer from "./components/AddCustomer";
import CustomerList from "./components/CustomerList";
import EditCustomer from "./components/EditCustomer";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/customer-list" element={<CustomerList />} />
        <Route path="/edit-customer/:id" element={<EditCustomer />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
