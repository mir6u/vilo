"use client"
import React, { useEffect, useState } from "react";
import MainProfile from "./MainProfile";
import SocialsSection from "./SocialsSection";
import { findUser, findSocials } from "./UserService";

interface UserProfileProps {
  id: string;
}

const UserProfile = ({ id }: UserProfileProps) => {
  const [user, setUser] = useState<any>(null);
  const [socials, setSocials] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await findUser(id);
        if (!userData) {
          // Handle the case where the user is not found
          return;
        }

        const socialsData = await findSocials(userData.id);

        setUser(userData);
        setSocials(socialsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!user) {
    // Handle the case where the user is not found
    return <div>User not found</div>;
  }

  return (
    <div>
      <MainProfile user={user} />
      <SocialsSection socials={socials} />
    </div>
  );
};

export default UserProfile;
