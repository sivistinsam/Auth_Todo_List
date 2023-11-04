// Import necessary dependencies and styles
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Todo from "./Components/Todo";
import Home from "./Components/Home";

// Define the main App component
function App() {
  // Use the Auth0 authentication hook to access user data and authentication status
  const { user, isAuthenticated } = useAuth0();
  // Extract the user's name and profile picture if authenticated
  const userName = isAuthenticated ? user.name : "";
  const profilePic = isAuthenticated ? user.picture : "";
  console.log(userName, profilePic);

  return (
    // The main container for the application
    <div className="App">
      {/* Render the Home component with user information */}
      <Home user={userName} picture={profilePic} />
      {/* Render the Todo component if the user is authenticated */}
      {isAuthenticated && <Todo />}
      {/* If the user is not authenticated, display an image */}
      {!isAuthenticated && (
        <img
          // Image source URL
          src="https://images.unsplash.com/photo-1650735310415-392ab5378954?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // Alternative text for the image
          alt="HomeImage"
          // Inline CSS to set the width to 100% and height to 100vh
          style={{ width: "100%", height: "100vh" }}
        />
      )}
    </div>
  );
}

export default App;
