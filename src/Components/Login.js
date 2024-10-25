// src/Components/Login.js
import React, { useState } from "react"; // Import React and useState hook
import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase function for signing in
import { auth } from "../Firebase/Firebase"; // Import Firebase authentication instance
import './Auth.css'; // Import CSS for styling

function Login() {
  const [email, setEmail] = useState(""); // State for storing email input
  const [password, setPassword] = useState(""); // State for storing password input
  const [error, setError] = useState(""); // State for storing error messages

  // Function to handle user login
  const handleLogin = async () => {
    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!"); // Alert on successful login
      // Redirect or perform additional actions after login
    } catch (err) {
      setError("Incorrect email or password."); // Set error message if login fails
    }
  };

  return (
    <div className="auth-box"> {/* Container for login inputs */}
      {/* Email input field */}
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} // Update email state on change
      />
      {/* Password input field */}
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} // Update password state on change
      />
       <form>
            {/* Other form fields for Login */}
            <button type="submit" className="auth-button">Login</button>
        </form>
      {/* Display error message if any */}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login; // Export the Login component
