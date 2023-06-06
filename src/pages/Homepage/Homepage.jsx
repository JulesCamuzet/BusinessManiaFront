import "./Homepage.css";
import { Link, useNavigate } from "react-router-dom";
import userConnectedContext from "../../contexts/userConnected";
import { useContext, useEffect } from "react";

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
        <button>Login</button>
      </Link>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Homepage;
