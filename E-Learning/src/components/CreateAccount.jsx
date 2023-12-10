import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div>
      <div className="log-in-modal">
        <h2 style={{ margin: "0" }}>Create an account</h2>
        <p>Create an account for a full experience</p>

        <form action="">
          <input type="text" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input type="text" name="code" id="code" placeholder="Teacher code" />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>

        <div className="center-flex">
          <p
            style={{ textAlign: "center", marginBottom: "0", fontSize: "16px" }}
          >
            Already have an account?
          </p>
          <Link to="/login" className="create-acc">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
