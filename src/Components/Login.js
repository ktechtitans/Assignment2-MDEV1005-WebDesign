import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase"; // Import Firebase authentication instance
import './Auth.css'; // Import CSS for styling

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
     
    } catch (err) {
      setError("Incorrect email or password."); // Display error message
    }
  };

  return (
    <div className="auth-box">
      <form onSubmit={handleLogin}> {/* Attach handleLogin to form submission */}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-button">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login; // Export the Login component
