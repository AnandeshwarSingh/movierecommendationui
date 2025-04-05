import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import SignUp from "./SignUp";

const Login = ({ onClose }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [login, setLogin] = useState({
    "email":"",
    "password": ""
  });

  return (
    <>
      {showSignUp ? (
        <SignUp onClose={() => setShowSignUp(false)} />
      ) : (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={onClose}>✖</button>
            <h2>Login</h2>
            <input type="email" value={login.email} placeholder="Email ID" className={styles.inputField} />
            <input type="password" value={login.password} placeholder="Password" className={styles.inputField} />
            <button className={styles.loginButton}>Login</button>
            {/* New User Section */}
            <p className={styles.newUserText}>
              Are you new here?{" "}
              <span className={styles.signUpLink} onClick={() => setShowSignUp(true)}>
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
