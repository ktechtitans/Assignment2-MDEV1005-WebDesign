import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase"; // Import Firebase authentication instance
import './Auth.css'; // Import CSS for styling

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages

  // Function to handle user signup
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
   
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}> {/* Attach handleSignUp to form submission */}
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
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignUp; // Export the SignUp component

