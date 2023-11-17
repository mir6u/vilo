'use client'
import React from 'react'
import { useSession } from "next-auth/react"

const ProfilePage = () => {
  const { status, data: session } = useSession()
  return (
    <div className='text-white'>{session?.user?.name}</div>
  )
}



export default ProfilePage