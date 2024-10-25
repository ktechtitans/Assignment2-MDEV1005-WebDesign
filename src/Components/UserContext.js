// src/context/UserContext.js
import { createContext, useContext, useState, useEffect } from "react"; // Import necessary hooks and functions from React
import { onAuthStateChanged } from "firebase/auth"; // Import Firebase auth listener
import { auth } from "../firebase"; // Import the Firebase authentication instance

// Create a context for user authentication
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUserContext = () => useContext(UserContext);

// UserContextProvider component to wrap around the application
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the user object
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Set up an auth state observer and get user data
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state with the authenticated user
      setLoading(false); // Set loading to false once user data is fetched
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    // Provide the user state to the context consumers
    <UserContext.Provider value={{ user }}>
      {!loading && children} {/* Render children only when loading is complete */}
    </UserContext.Provider>
  );
};
