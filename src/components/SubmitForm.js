import { useContext } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Blog from "./Blog";

const SubmitForm = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/Login");
      console.log("logout");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h2 style={{ color: "green", marginTop: "100px" }}>Submit Form</h2>
        <button onClick={handleLogout}>Log Out</button>
        <hr className="w3-opacity" />
      </div>
      <Form />
      <Blog />
          </>
  );
};

export default SubmitForm;
