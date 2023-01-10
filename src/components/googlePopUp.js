const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  
  const auth = getAuth();
  const provider= new GoogleAuthProvider();






  const {signIn, user, setUser} = UserAuth();
  const navigate = useNavigate();






  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
   
  };











  return (
    <>
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h1 style={{ color: "rgb(254, 79, 164)", marginTop: "100px" }}>
          Login
        </h1>
        <hr className="w3-opacity" />

        <h2 className="w3-padding-16">Join the conversation</h2>
        <br />
        <p className="w3-wide">Like 👍🏻.Comment 💬.Share ⤴️</p>
        <hr />
        <br />
        <p>
          {" "}
          Log in to your account. Share my content with your friends and family.
          Comment on the the blogs and posts.
        </p>
      </div>

      <div
        className="w3-padding-32 w3-content w3-text-grey"
        id="login"
        style={{ margin: "10px auto" }}
      >
        <div className="turquoise w3-card w3-hover-shadow">
          <div className="pink">
            <form
            
              style={{
                border: "solid 4px rgb(250, 200,65)",
                padding: "25px",
              }}
              target="_blank"
            >
              {/* <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="email"
                  id="email"
                  onChange={ (e) => setEmail(e.target.value) }
                  placeholder="Email"
                  required
                  name="user_email"
                  aria-describedby="emailHelp"
                />
              </p>

              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="password"
                  id="password"
                  onChange={ (e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  name="user_password"
                  aria-describedby="password"
                />
              </p> */}
              {error && (
                <p className="error-message">
                  Please check your email or password. <br />
                  Create an account if you do not have one.{" "}
                </p>
              )}
              <p>
                <button
                  type="submit"
                  onClick={handleLogin}
                  value="send"
                  className="w3-button w3-light-grey w3-padding-large w3-margin-top"
                  style={{
                    border: "solid 4px rgb(250, 200,65)",
                    borderTopRightRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  Login{" "}
                </button>
              </p>

              <p>
                <hr />
                <h6>Not registered yet? </h6>
                <NavLink to="/Register">Create an Account</NavLink>
              </p>
            </form>
             { user ? <p>Logged in as {user.email}</p> : <h4>log in please</h4>} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
