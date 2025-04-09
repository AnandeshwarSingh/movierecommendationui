import React, { useState } from "react";

import userService from "../services/userService";
import styles from "../styles/SignUp.module.css";

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, email, phoneNumber, password, confirmPassword } = formData;

    // Validate password match
    if (password !== confirmPassword) {
      setError("Please enter the same password in both fields.");
      return;
    }

    setError("");

    try {
      const response = await userService.addUser({
        name,
        email,
        phoneNumber,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        alert("Sign Up successful!");
        onClose();
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error saving user:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to connect to the server.");
      }
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>

        {/* Page Title */}
        <h1 className={styles.pageTitle}>Sign Up</h1>

        {/* Form Fields */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className={styles.inputField}
          onChange={handleChange}
          value={formData.fullName}
        />
        <input
          type="email"
          placeholder="Email ID"
          className={styles.inputField}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          className={styles.inputField}
          onChange={handleChange}
          value={formData.phone}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.inputField}
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter Password"
          className={styles.inputField}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* Sign Up Button */}
        <button className={styles.signUpButton} onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
