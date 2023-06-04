import { useRef, useState } from "react";
import "./Loginpage.css";

const Loginpage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    (async () => {
      setLoading(true);
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const url = "http://127.0.0.1:3000/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };

      fetch(url, options)
      .then(response => response.text())
      .then(result => {
        setLoading(false);
        result = JSON.parse(result);
        console.log(result)
        if (result.error) {
          setMessage(result.error.message)
        } else {
          setMessage(result.success.message)
        }
      })
    })();
  };
  return (
    <div className="login-page">
      {(() => {
        if (loading) {
          return <h1>Loading</h1>;
        } else {
          return (
            <>
              <span className="message">{message}</span>
              <input placeholder="Enter e-mail" ref={emailRef} type="text" />
              <input
                placeholder="Enter password"
                ref={passwordRef}
                type="text"
              />
              <button onClick={handleClick}>Login</button>
            </>
          );
        }
      })()}
    </div>
  );
};

export default Loginpage;
