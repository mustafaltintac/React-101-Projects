import { useState } from "react";
import "./App.css";
// import AuthContext from "./context/auth-context";
import AuthContext from "./context/Auth-context"
import Auth from "./Auth";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const loginAuth = () => {
    console.log("girdi")
    setAuthStatus(true);
  };

  return (
    <>
      <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
        <Auth />
      </AuthContext.Provider>
    </>
  );
}

export default App;
