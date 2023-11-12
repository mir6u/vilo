import React from "react";
import LoginPage from "../components/LoginPage";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const SignInPage = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <LoginPage />
      </main>
    </>
  );
};

export default SignInPage;
