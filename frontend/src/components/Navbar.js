import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <h2>Customer Management</h2>
      <div>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/add-customer" style={styles.link}>Add Customer</Link>
        <Link to="/customer-list" style={styles.link}>Customer List</Link>
        <Link to="/change-password" style={styles.link}>Change Password</Link>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  },
  button: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  }
};

export default Navbar;
