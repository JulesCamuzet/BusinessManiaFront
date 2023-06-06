import "./Homepage.css";
import { Link, useNavigate } from "react-router-dom";
import userConnectedContext from "../../contexts/userConnected";
import { useContext, useEffect } from "react";
import RoundedButton from "../../components/RoundedButton/RoundedButton";

const Homepage = () => {
  const navigate = useNavigate();
  const { userConnected, setUserConnected } = useContext(userConnectedContext);
  useEffect(() => {
    if (userConnected) {
      navigate("/userpage");
    }
  }, [userConnected]);
  return (
    <div className="homepage">
      <Link to={"/login"}>
        <RoundedButton type="" label="Login" />
      </Link>
      <Link to={"/register"}>
        <RoundedButton type="" label="Register" />
      </Link>
    </div>
  );
};

export default Homepage;
