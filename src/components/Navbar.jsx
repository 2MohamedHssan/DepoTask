import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const  Navgite = useNavigate()
  const backToHome = (e) => {
    e.preventDefault()
    Navgite('/')
}
  return (
    <div className='shadow-md z-50 sticky top-0 bg-white px-2'>
      <nav className='flex flex-wrap justify-between items-center container mx-auto'>
        <div onClick={backToHome} title='Back to Home' className='cursor-pointer flex items-center'>
          <img className='w-14 h-14 mt-2 mr-2' src={logo} alt="" />
          <h1 className=' font-bold text-md text-[#1f4f8f]'>Depo<span className='text-[#00a0ac] block'>Web</span></h1>  
        </div>
        <div className='flex justify-around w-40 max-w-48'>
          <NavLink to='/' className='font-bold'>Home</NavLink>
          <NavLink to='/user' className='font-bold '>User</NavLink>
        </div>
      </nav>  
    </div>
  )
}

export default Navbar