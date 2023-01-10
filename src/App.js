import React, { useState } from "react";
import NavBar from "../src/components/navbar";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./frontend/Home.js";
import Work from "./frontend/Work.js";
import AboutMe from "./frontend/AboutMe";
import Podcast from "./frontend/Podcast.js";
import Contact from "./frontend/Contact.js";
import Login from "./frontend/Login.js";
import Register from "./components/Register.js";
import SubmitForm from "./components/SubmitForm.js";
import Footer from "../src/components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./styles/Home.css";

function App() {

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AuthContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Work/" element={<Work />} />
            <Route path="/AboutMe/" element={<AboutMe />} />
            <Route path="/Podcast/" element={<Podcast />} />
            <Route path="/Contact/" element={<Contact />} />
            <Route path="/Login/" element={<Login />} />
            <Route path="/Register/" element={<Register />} />
            <Route
              path="/Blog/"
              element={
                <ProtectedRoutes>
                  <SubmitForm />
                </ProtectedRoutes>
              }
            />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
