import React from "react";
import LoginPage from "../components/LoginPage";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
