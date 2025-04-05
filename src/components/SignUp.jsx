import React from "react";
import styles from "../styles/SignUp.module.css";

const SignUp = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>✖</button>

        {/* Page Title */}
        <h1 className={styles.pageTitle}>Sign Up</h1>

        {/* Form Fields */}
        <input type="text" placeholder="Full Name" className={styles.inputField} />
        <input type="email" placeholder="Email ID" className={styles.inputField} />
        <input type="tel" placeholder="Phone Number" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <input type="password" placeholder="Re-enter Password" className={styles.inputField} />

        {/* Sign Up Button */}
        <button className={styles.signUpButton}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
