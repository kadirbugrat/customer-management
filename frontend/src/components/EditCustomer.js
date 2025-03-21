import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCustomerById, updateCustomer } from "../api";
import Navbar from "./Navbar";
import "../styles.css";

const EditCustomer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({ firstName: "", lastName: "", tcNo: "" });
  const navigate = useNavigate();

  useEffect(() => {
    getCustomerById(id).then((res) => setCustomer(res.data));
  }, [id]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCustomer(id, customer);
    navigate("/customer-list");
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h2>Edit Customer</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field"
              value={customer.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field"
              value={customer.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="tcNo"
              placeholder="TC No"
              className="input-field"
              value={customer.tcNo}
              onChange={handleChange}
            />
            <button type="submit" className="submit-button">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
