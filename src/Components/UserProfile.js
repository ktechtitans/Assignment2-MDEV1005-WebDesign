import { useState, useEffect } from "react"; // Importing React hooks for state and side effects
import { auth } from "../Firebase/Firebase"; // Importing the Firebase authentication instance
import "./UserProfile.css"; // Importing the CSS file for styling

function UserProfile() {
  // State to hold the current user
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set the current user when the component mounts
    setUser(auth.currentUser);
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div className="user-profile">
      {user && ( // Render content only if the user is authenticated
        <>
          <h2>Welcome, {user.email}</h2> {/* Display user's email */}
          <p>Status: Active</p> {/* Display user status */}
        </>
      )}
    </div>
  );
}

export default UserProfile; // Exporting the UserProfile component for use in other parts of the application
