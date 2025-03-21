import React, { useState } from "react";
import { addCustomer } from "../api";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles.css";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({ firstName: "", lastName: "", tcNo: "", registrationDate: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCustomer(customer);
      setMessage("Customer added successfully!");
      setTimeout(() => navigate("/customer-list"), 1000);
    } catch (error) {
      setMessage("Failed to add customer!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h2>Add New Customer</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field"
              onChange={handleChange}
            />
            <input
              type="text"
              name="tcNo"
              placeholder="TC No"
              className="input-field"
              onChange={handleChange}
            />
            <input
              type="date"
              name="registrationDate"
              className="input-field"
              onChange={handleChange}
            />
            <button type="submit" className="submit-button">Save</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
