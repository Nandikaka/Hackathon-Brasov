// import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LogIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8801/user", { email, pass })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="log-in-modal">
        <h2 style={{ margin: "0" }}>Log In</h2>
        <p>Log into your e learning account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>

        <div className="center-flex">
          <p
            style={{ textAlign: "center", marginBottom: "0", fontSize: "16px" }}
          >
            You don&#39;t have an account?
          </p>
          <Link to="/createacc" className="create-acc">
            Create one now!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
