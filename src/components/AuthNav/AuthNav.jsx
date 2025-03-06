import clsx from "clsx"
import { NavLink } from "react-router-dom"
import c from './AuthNav.module.css'

function AuthNav() {
  return (
  <div className={c.navigation}>
  <NavLink to='/login' className={({ isActive }) => clsx(isActive && c.active)}>Log In</NavLink>
  <NavLink to='/register' className={({isActive}) => clsx(isActive && c.active)}>Register</NavLink>
  </div>
  )
}

export default AuthNav
