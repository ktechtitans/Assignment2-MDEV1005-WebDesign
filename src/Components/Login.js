// src/Components/Login.js
import React, { useState } from "react"; // Ensure React is imported
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      // Redirect or perform additional actions after login
    } catch (err) {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login; // Make sure to export the Login component
