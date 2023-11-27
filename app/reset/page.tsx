import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import ResetPage from "../components/ResetPage";


const SignInPage = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <ResetPage />
    </>
  );
};

export default SignInPage;
