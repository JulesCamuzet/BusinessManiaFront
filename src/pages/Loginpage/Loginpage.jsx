import { useEffect, useContext } from "react";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import userConnectedContext from "../../contexts/userConnected";

const Loginpage = () => {
  const { userConnected, setUserConnected } = useContext(userConnectedContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (userConnected) {
      navigate("/userpage");
    }
  }, [userConnected]);

  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
};

export default Loginpage;
