import React from 'react'

function OverviewCard({title, number, color}) {
  return (
    <div className={`w-full ${color} rounded-md px-5 py-4 ${title === 'Starred' && 'max-sm:col-span-2'}`}>
      <p className={`text-sm font-medium text-white`}>{title}</p>
      <p className={`text-lg font-bold text-white mt-7`}>{number <= 9 ? '0' + number : number}</p>
    </div>
  )
}

export default OverviewCard
