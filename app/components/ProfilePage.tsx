'use client'
import React from 'react'
import { useSession } from "next-auth/react"

const ProfilePage = () => {
  const session = useSession()
  return (
    <div className='text-white'>{session.data?.user?.name}</div>
  )
}

export default ProfilePage