import React from "react";
import LoginPage from "../components/LoginPage";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const SignInPage = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      
        <LoginPage />
      
    </>
  );
};

export default SignInPage;
