import { useNavigate } from "react-router-dom";
import "./Userpage.css";
import { useContext, useEffect } from "react";
import userConnectedContext from "../../contexts/userConnected";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

const Userpage = () => {
  const navigate = useNavigate();

  const { userConnected, setUserConnected } = useContext(userConnectedContext);

  useEffect(() => {
    if (!userConnected) {
      navigate("/homepage");
    }
  }, [userConnected]);

  

  return (
    <>
      <span>Vous êtes connecté</span>
      <LogoutButton />
    </>
  );
};

export default Userpage;
