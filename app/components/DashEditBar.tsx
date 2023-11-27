import React from 'react'
import DashSidebar from './dashSidebar'
import { findSocials, findUser } from '../utils/UserService'
import { getServerSession } from "next-auth";
import { authOptions } from '../api/auth/authOptions';


const DashEditBar = async () => {

  const session = await getServerSession(authOptions);
  const user = await findUser(session?.user?.name!)
  const socials = await findSocials(user?.id!)
  return (
    <>
      <DashSidebar user={user} socials={socials} />
    </>
  )
}

export default DashEditBar
