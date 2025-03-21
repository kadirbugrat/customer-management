import React, { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "../api";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles.css";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    getCustomers()
      .then((res) => setCustomers(res.data))
      .catch((err) => console.error("Error fetching customers:", err));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
    if (confirmDelete) {
      await deleteCustomer(id);
      fetchCustomers();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h2>Customer List</h2>
        <div className="table-container">
          {customers.length > 0 ? (
            <table className="customer-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>TC No</th>
                  <th>Registration Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c) => (
                  <tr key={c.id}>
                    <td>{c.firstName}</td>
                    <td>{c.lastName}</td>
                    <td>{c.tcNo}</td>
                    <td>{c.registrationDate}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => navigate(`/edit-customer/${c.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(c.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-customers">No Customers Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
