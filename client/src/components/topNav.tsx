import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import Auth from '../utils/auth'
// import { Avatar } from '@radix-ui/react-avatar';

export default function TopNav({ profile, setProfile } : { profile: any, setProfile: any }) {
  
  console.log(profile);
  console.log(setProfile);
  

  return (
    <nav className='mt-0 py-2 px-4 w-full bg-gray-800 text-white flex justify-between items-center'>
      <h1 className='text-4xl font-bold text-center'>
        Hello {profile.username ? profile.username : 'Unknown User'}!
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
      {/* <div>
        <Avatar>{profile?.data?.username}</Avatar>
      </div> */}
    </nav>
  )
}