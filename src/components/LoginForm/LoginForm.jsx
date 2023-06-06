import { useState, useRef, useContext } from "react";
import TextInput from "../TextInput/TextInput";
import Loader from "../Loader/Loader";
import PasswordInput from "../PasswordInput/PasswordInput";
import RoundedButton from "../RoundedButton/RoundedButton";
import userConnectedContext from "../../contexts/userConnected";
import "./LoginForm.css";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { userConnected, setUserConnected } = useContext(userConnectedContext);

  const loginWithCredentials = () => {
    (async () => {
      setLoading(true);
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const url = "http://localhost:3000/login";
      const options = {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };

      fetch(url, options)
        .then((response) => {
          return response.text();
        })
        .then((result) => {
          setLoading(false);
          result = JSON.parse(result);
          if (result.error) {
            setMessage(result.error.message);
          } else {
            setUserConnected(true);
          }
        });
    })();
  };

  return (
    <form action="" className="login-form" onSubmit={loginWithCredentials}>
      {(() => {
        if (loading) {
          return <Loader />;
        } else {
          return (
            <>
              <span className="message">{message}</span>
              <TextInput ref={emailRef} placeholder="Enter e-mail" />
              <PasswordInput ref={passwordRef} placeholder="Enter password" />
              <RoundedButton type="submit" label="Login" />
            </>
          );
        }
      })()}
    </form>
  );
};

export default LoginForm;
