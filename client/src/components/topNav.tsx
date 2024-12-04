import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import Auth from '../utils/auth'

export default function TopNav({ profile, setProfile } : { profile: any, setProfile: any }) {
  

  return (
    <nav className='mt-0 py-2 px-4 w-full bg-gray-800 text-white flex justify-between items-center'>
      <h1 className='text-4xl font-bold text-center'>
        Top of the Stack
      </h1>
      <div className='flex items-center justify-center'>
        <Link to="/login">
          <button className='w-32 text-center'>Log In</button>
        </Link>
        <Link to="/signup">
          <button className='ml-4 w-32 text-center'>Sign Up</button>
        </Link>
        <Link to="/dashboard">
          <button className='ml-4 w-32 text-center'>Dashboard</button>
        </Link>
      </div>
      <div className='bg-gray-600 w-10 h-10 rounded-full flex place-content-center'>
        <span className='text-2xl font-bold mt-1'>
            {profile?.username ? profile.username.slice(0,1).toUpperCase() : '?'}
        </span>
      </div>
    </nav>
  )
}