import "./RegisterForm.css";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import RoundedButton from "../RoundedButton/RoundedButton";
import { useRef, useState } from "react";
import Loader from "../Loader/Loader";

const RegisterForm = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const emailConfirmationRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const registerWithCredentials = () => {
    (async () => {
      setLoading(true);

      const username = usernameRef.current.value;
      const email = emailRef.current.value;
      const emailConfirmation = emailConfirmationRef.current.value;
      const password = passwordRef.current.value;
      const passwordConfirmation = passwordConfirmationRef.current.value;

      if (email !== emailConfirmation || password !== passwordConfirmation) {
        setMessage("Invalid informations.");
      }

      const url = "http://127.0.0.1:3000/register";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authMode: "credentials",
          username: username,
          email: email,
          emailConfirmation: emailConfirmation,
          password: password,
          passwordConfirmation: passwordConfirmation,
        }),
      };

      fetch(url, options)
        .then((response) => response.text())
        .then((result) => {
          setLoading(false);
          result = JSON.parse(result);
          if (result.error) {
            setMessage(result.error.message);
          } else {
            setMessage(
              "Votre compte à bien été créé, vous pouvez maintenant vous connecter."
            );
          }
        });
    })();
  };

  return (
    <form
      action=""
      className="register-form"
      onSubmit={registerWithCredentials}
    >
      {(() => {
        if (loading) {
          return <Loader />;
        } else {
          return (
            <>
              <span className="message">{message}</span>
              <TextInput ref={usernameRef} placeholder="Enter username" />
              <TextInput ref={emailRef} placeholder="Enter e-mail" />
              <TextInput
                ref={emailConfirmationRef}
                placeholder="Confirm e-mail"
              />
              <PasswordInput ref={passwordRef} placeholder="Enter password" />
              <PasswordInput
                ref={passwordConfirmationRef}
                placeholder="Confirm password"
              />
              <RoundedButton type="submit" label="Register" />
            </>
          );
        }
      })()}
    </form>
  );
};

export default RegisterForm;
