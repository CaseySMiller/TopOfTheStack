import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold mx-auto text-center my-4'>
        Welcome to the MERN Auth Boilerplate
      </h1>
      <div className='flex items-center justify-center'>
        <Link to="/login">
          <Button className='w-32 text-center'>Log In</Button>
        </Link>
        <Link to="/signup">
        <Button className='ml-4 w-32 text-center'>Sign Up</Button>
        </Link>
        <Link to="/dashboard">
          <Button className='ml-4 w-32 text-center'>Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage