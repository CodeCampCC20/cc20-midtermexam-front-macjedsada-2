
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <nav className=' h-8 pl-6 bg-amber-300 flex items-center gap-6'>
      <NavLink className={'cursor-pointer hover:underline'} to={'/login'}>Login</NavLink>
      <NavLink className={'cursor-pointer hover:underline'} to={'/todo'}>MyTodo</NavLink>
    </nav>
  )
}

export default NavBar