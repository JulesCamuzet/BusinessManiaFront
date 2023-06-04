import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
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
