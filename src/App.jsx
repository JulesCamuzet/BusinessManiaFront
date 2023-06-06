import "./App.css";
import { useEffect, useState } from "react";
import Router from "./Routes";
import userConnectedContext from "./contexts/userConnected";
import Loader from "./components/Loader/Loader";

function App() {
  const [userConnected, setUserConnected] = useState(null);

  const getSessionState = async () => {
    const url = "http://localhost:3000/sessionState";
    const options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
      .then((response) => response.text())
      .then((result) => {
        result = JSON.parse(result);
        if (result.success.userConnected) {
          setUserConnected(true);
        } else {
          setUserConnected(false);
        }
      });
  };

  useEffect(() => {
    getSessionState();
  }, []);

  if (userConnected === null) {
    return <Loader />;
  } else {
    return (
      <userConnectedContext.Provider
        value={{ userConnected, setUserConnected }}
      >
        <Router />
      </userConnectedContext.Provider>
    );
  }
}

export default App;
