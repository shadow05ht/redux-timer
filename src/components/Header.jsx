import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Fulltime</NavLink>
      <NavLink to="/stopwatch" className={({ isActive }) => isActive ? 'active' : ''}>Stopwatch</NavLink>
      <NavLink to="/timer" className={({ isActive }) => isActive ? 'active' : ''}>Timer</NavLink>
    </div>
  )
}

export default Header
