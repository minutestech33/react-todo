import React from 'react'
import { NavLink } from 'react-router-dom'

function TabLink({title, action}) {
  return (
    <NavLink to={action} className='text-sm active:scale-95 text-center transition-all font-bold text-gray-600 py-2 px-2 relative'>
      {title}
      <span className={`h-2 w-2 rounded-full bg-rose-500 hidden absolute top-1`}></span>
    </NavLink>
  )
}

export default TabLink
