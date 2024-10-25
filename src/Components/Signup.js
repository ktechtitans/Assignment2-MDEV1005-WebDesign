// src/Components/Signup.js
import React, { useState } from "react"; // Import React and useState hook
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase function for creating user
import { auth } from "../Firebase/Firebase"; // Import Firebase authentication instance
import './Auth.css'; // Import CSS for styling

function SignUp() {
  const [email, setEmail] = useState(""); // State for storing email input
  const [password, setPassword] = useState(""); // State for storing password input
  const [error, setError] = useState(""); // State for storing error messages

  // Function to handle user signup
  const handleSignUp = async () => {
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!"); // Alert on successful registration
      // Redirect or perform additional actions after signup
    } catch (err) {
      setError(err.message); // Set error message if signup fails
    }
  };

  return (
    <div>
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
            {/* Other form fields for Sign Up */}
            <button type="submit" className="auth-button">Sign Up</button>
        </form>
      {/* Display error message if any */}
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignUp; // Export the SignUp component
