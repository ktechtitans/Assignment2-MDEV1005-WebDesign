import { useState, useEffect } from "react";
import { auth } from "../Firebase/Firebase";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <div className="user-profile">
      {user && (
        <>
          <h2>Welcome, {user.email}</h2>
          <p>Status: Active</p>
        </>
      )}
    </div>
  );
}

export default UserProfile;
