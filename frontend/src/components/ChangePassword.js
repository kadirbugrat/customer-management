import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../api";
import Navbar from "./Navbar";
import "../styles.css";

const ChangePassword = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setErrorMsg("New password and confirmation do not match");
      return;
    }

    try {
      await changePassword({
        oldPassword: form.oldPassword,
        newPassword: form.newPassword
      });
      setSuccessMsg("Password changed successfully");
      setErrorMsg("");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      let serverMessage = error.message;
      if (error.response && error.response.data) {
        serverMessage = JSON.stringify(error.response.data);
      }
      setErrorMsg("Failed to change password: " + serverMessage);
      setSuccessMsg("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h2>Change Password</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              className="input-field"
              value={form.oldPassword}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="input-field"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              className="input-field"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button">
              Change Password
            </button>
          </form>
          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
          {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
