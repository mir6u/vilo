import React from "react";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import "./styles.css";
import { authOptions } from "../api/auth/authOptions";
import DashSidebar from "../components/dashSidebar";
import { useSession } from "next-auth/react";
import DashEditBar from "../components/DashEditBar";
import { findSocials, findUser } from "../utils/UserService";
import { useRouter } from "next/navigation";
const ProfilePage = async () => {


  return (
    <>
      <div className="flex">
        <DashEditBar />
      </div>
    </>
  );
};

export default ProfilePage;
