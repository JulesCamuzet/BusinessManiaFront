import "./LogoutButton.css";
import userConnectedContext from "../../contexts/userConnected";
import { useContext } from "react";

const LogoutButton = () => {
  const { userConnected, setUserConnected } = useContext(userConnectedContext);

  const handleLogout = async () => {
    const url = "http://localhost:3000/logout";
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
        setUserConnected(false);
      })
      .catch(err => {
        setUserConnected("error");
      })
  };

  return <button onClick={handleLogout} className="logout-button">Logout</button>;
};

export default LogoutButton;
