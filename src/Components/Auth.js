import React, { useState } from 'react'; // Import React and useState
import SignIn from '../Components/Login'; // Adjust the path to your SignIn component
import SignUp from '../Components/Signup'; // Adjust the path to your SignUp component
import './Auth.css';


const Auth = () => {
    const [index, setIndex] = useState(false); // Use state to toggle between SignIn and SignUp
  
    const toggleIndex = () => {
      setIndex((prevState) => !prevState);
    };
  
    return (
      <div className="container">
        {/* Conditional Rendering of SignIn or SignUp Components */}
        {!index ? <SignIn /> : <SignUp />}
        
        {/* Toggle Link to Switch Between Sign In and Sign Up */}
        <p onClick={toggleIndex}>
          {index ? "Click here to Sign In" : "Click here to Sign Up"}
        </p>
      </div>
    );
};
  
export default Auth;
