import "./Registerpage.css";
import {useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userConnectedContext from "../../contexts/userConnected";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Registerpage = () => {

  const { userConnected, setUserConnected } = useContext(userConnectedContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userConnected) {
      navigate("/userpage");
    }
  }, [userConnected]);

  
  return (
    <div className="register-page">
      <RegisterForm />
    </div>
  );
};

export default Registerpage;
