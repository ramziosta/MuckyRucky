import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const menuItems = [
  {
    name: "Home",
    path: "/",
    description: "",
  },
  {
    name: "Work",
    path: "Work",
    description: "",
  },
  {
    name: "About Me",
    path: "AboutMe",
    description: "",
  },
  {
    name: "Podcast",
    path: "Podcast",
    description: "",
    onClick: () => console.log("clicked"),
  },
  {
    name: "Contact",
    path: "Contact",
    description: "",
  }, {
    name: "My Blogs",
    path: "Blog",
    description: "Blog",
  },
  {
    name: "Login",
    path: "Login",
    description: "login",
  },  
];

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{fontFamily:"'blanka'"}}
      >
      
        <div className="container-fluid ms-5">
          <NavLink to="/" className="navbar-brand fs-1  ms-4 fw-bold logo"  style={{ color:"rgba(0,0,0,0)", webkitTextStroke: ".5px rgb(254, 79, 164)"}}>
            Emilie Pons
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <div className="navbar-nav nav-pills">
              {menuItems.map((item, index) => (                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link fs-6 mx-3 active"
                        : "nav-link fs-6 mx-3"
                    }
                  >
                    {item.name}
                  </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;