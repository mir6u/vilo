'use client'
import React from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const ProfilePage = () => {
  const { status, data: session } = useSession()
  const router = useRouter()
  if (status === 'unauthenticated') {
    router.push('/')
  }
  
  return (
    <div className='text-white'>{session?.user?.name}</div>
  )
}

export default ProfilePage