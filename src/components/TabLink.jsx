import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

function TabLink({ title, action }) {
  const { tasks } = useContext(DataContext)
  const cpath = useLocation().pathname
  return (
    <NavLink onClick={() => localStorage.removeItem(title)} to={action} className='text-sm active:scale-95 text-center transition-all font-bold text-gray-600 py-2 px-2 relative'>
      {title}
      <span className={`h-2 w-2 rounded-full bg-rose-500 ${(localStorage.getItem(title) !== 'added' || cpath === action || tasks.filter(item => item.status === title).length === 0) && 'hidden'} absolute top-1`}></span>
    </NavLink>
  )
}

export default TabLink
