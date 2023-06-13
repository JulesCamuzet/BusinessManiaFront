import { Link } from "react-router-dom";
import RoundedButton from "../../components/RoundedButton/RoundedButton";
import "./ErrorPage.css";

const ErrorPage = (props) => {
  const setUserConnected = props.setUserConnected;

  const handleClick = () => {
    setUserConnected(null);
  };

  return (
    <div className="error-page">
      <span>Ups ! Something went wrong with the servers :/</span>
      <div onClick={handleClick}>
        <RoundedButton label="You can still retry..." type="" />
      </div>
    </div>
  );
};

export default ErrorPage;
