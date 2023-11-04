import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Todo from "./Components/Todo";
import Home from "./Components/Home";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const userName = isAuthenticated ? user.name : "";
  const profilePic = isAuthenticated ? user.picture : "";
  console.log(userName, profilePic);

  return (
    <div className="App">
      <Home user={userName} picture={profilePic} />
      {isAuthenticated && <Todo />}
      {!isAuthenticated && (
        <img
          src="https://images.unsplash.com/photo-1650735310415-392ab5378954?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="HomeImage"
          style={{ width: "100%", height: "100vh" }}
        />
      )}
    </div>
  );
}

export default App;
