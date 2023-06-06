import { useNavigate } from "react-router-dom";
import "./Userpage.css";
import { useContext, useEffect } from "react";
import userConnectedContext from "../../contexts/userConnected";

const Userpage = () => {
  const navigate = useNavigate();

  const { userConnected, setUserConnected } = useContext(userConnectedContext);

  useEffect(() => {
    if (!userConnected) {
      navigate("/homepage");
    }
  }, [userConnected]);

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
      });
  };

  return (
    <>
      <span>Vous êtes connecté</span>
      <button onClick={handleLogout}>logout</button>
    </>
  );
};

export default Userpage;
