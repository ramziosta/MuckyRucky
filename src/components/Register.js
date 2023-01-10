import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


  const Register = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError("");

    try{
      await createUser(email, password);
      navigate("/Blog");
    }
    catch(error){
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h1 style={{ color: "rgb(254, 79, 164)", marginTop: "100px" }}>
          Register
        </h1>
      </div>

      <div
        className="w3-padding-32 w3-content w3-text-grey"
        id="login"
        style={{ margin: "10px auto" }}
      >
        <div className="turquoise w3-card w3-hover-shadow">
          <div className="pink">
            <form
              onSubmit={handleCreateUser}
              style={{
                border: "solid 4px rgb(250, 200,65)",
                padding: "25px",
              }}
              target="_blank"
            >
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  name="user_email"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </p>

              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="user_password"
                  aria-describedby="password"
                />
              </p>

              <p>
                <button
                  type="submit"
                  value="send"
                  className="w3-button w3-light-grey w3-padding-large w3-margin-top"
                  style={{
                    border: "solid 4px rgb(250, 200,65)",
                    borderTopRightRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  Register{" "}
                </button>
              </p>
              <p>
                <hr />
                <h6>Already registered? </h6>
                <NavLink to="/Login">Login</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
