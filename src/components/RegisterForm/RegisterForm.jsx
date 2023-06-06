import "./RegisterForm.css";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import RoundedButton from "../RoundedButton/RoundedButton";
import { useEffect, useRef, useState } from "react";
import Loader from "../Loader/Loader";

const RegisterForm = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const emailConfirmationRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    emailConfirmation: "",
    password: "",
    passwordConfirmation: "",
  });

  const registerWithCredentials = (event) => {
    (async () => {
      event.preventDefault();
      setLoading(true);

      const username = usernameRef.current.value;
      const email = emailRef.current.value;
      const emailConfirmation = emailConfirmationRef.current.value;
      const password = passwordRef.current.value;
      const passwordConfirmation = passwordConfirmationRef.current.value;

      setFormValues({
        username: username,
        email: email,
        emailConfirmation: emailConfirmation,
        password: password,
        passwordConfirmation: passwordConfirmation,
      });

      if (email !== emailConfirmation || password !== passwordConfirmation) {
        setMessage("Invalid informations.");
      }

      const url = "http://127.0.0.1:3000/registerWithCredentials";
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
          console.log(result);
          result = JSON.parse(result);
          console.log(result);
          if (result.error) {
            setMessage(result.error.message);
          } else {
            setMessage(
              "Your account has been created successfuly, you can now login."
            );
          }
        });
    })();
  };

  return (
    <form className="register-form" onSubmit={registerWithCredentials}>
      {(() => {
        if (loading) {
          return <Loader />;
        } else {
          return (
            <>
              <span className="message">{message}</span>
              <TextInput
                value={formValues.username}
                ref={usernameRef}
                placeholder="Enter username"
              />
              <TextInput
                value={formValues.email}
                ref={emailRef}
                placeholder="Enter e-mail"
              />
              <TextInput
                value={formValues.emailConfirmation}
                ref={emailConfirmationRef}
                placeholder="Confirm e-mail"
              />
              <PasswordInput
                value={formValues.password}
                ref={passwordRef}
                placeholder="Enter password"
              />
              <PasswordInput
                value={formValues.passwordConfirmation}
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
