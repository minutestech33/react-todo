import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { useLocation } from 'react-router-dom'

function Task({ index, id, title, status }) {
  const [isShown, setIsShown] = useState(false)
  const { tasks, setTasks } = useContext(DataContext)
  const cpath = useLocation().pathname
  const statusShow = {
    new: 'text-blue-500 bg-blue-50 border-blue-400',
    running: 'text-orange-500 bg-orange-50 border-orange-400',
    completed: 'text-emerald-500 bg-emerald-50 border-emerald-400',
    canceled: 'text-rose-500 bg-rose-50 border-rose-400',
    star: 'text-violet-500 bg-violet-50 border-violet-400',
  }
  const allStatus = [
    { id: 1, cstatus: 'New', border: 'border-blue-500' },
    { id: 2, cstatus: 'Running', border: 'border-orange-500' },
    { id: 3, cstatus: 'Completed', border: 'border-emerald-500' },
    { id: 4, cstatus: 'Canceled', border: 'border-rose-500' },
    { id: 5, cstatus: 'Starred', border: 'border-violet-500' },
  ]

  const changeStatus = (cstatus) => {
    if (cstatus !== status) {
      localStorage.setItem(cstatus, 'added');
    }
    const csTask = tasks.map(item => {
      if (item.id === id) {
        return { ...item, status: cstatus };
      }
      return item;
    })
    setTasks(csTask)
    setIsShown(false)
  }

  return (
    <div className={`w-full flex items-center justify-between bg-white p-4 ${index === 0 && 'rounded-t-md'} ${index === tasks.filter(item => item.status === status).length - 1 && 'rounded-b-md'} hover:cursor-pointer`}>
      <div className='flex items-center gap-3'>
        <div onClick={() => changeStatus('Completed')} className={`h-4 flex-shrink-0 w-4 rounded-full border ${status === 'Completed' ? 'border-gray-400' : 'border-gray-700 active:scale-90 transition-all'}`}></div>
        <p className={`text-md font-medium ${status === 'Completed' ? 'text-gray-400 line-through' : 'text-gray-700'} text-justify`}>{title}</p>
      </div>
      <div className='flex-shrink-0 flex'>
        {
          (isShown) && (
            <>
              <div onClick={() => setIsShown(false)} className='absolute top-0 left-0 w-full h-screen hover:cursor-default z-0'></div>
              <div className='relative z-20'>
                <div className={`w-max py-4 pl-4 flex gap-4 bg-white rounded-full absolute -top-4 right-0 statusAnim`}>
                  {
                    allStatus.map((item, index) => {
                      return (
                        <div onClick={() => changeStatus(item.cstatus)} key={index} className={`w-6 h-6 ${item.border} rounded-full ${status === item.cstatus ? 'border-[8px]' : 'border-[12px]'} hover:scale-110 transition-all active:scale-90`}></div>
                      )
                    })
                  }
                </div>
              </div>
            </>
          )
        }
        <p onClick={() => setIsShown(val => !val)} className={`w-max ml-4 text-xs font-bold text-center py-[3px] px-[8px] border rounded-full ${status === 'New' && statusShow.new} ${status === 'Running' && statusShow.running} ${status === 'Completed' && statusShow.completed} ${status === 'Canceled' && statusShow.canceled} ${status === 'Starred' && statusShow.star} select-none active:scale-90 transition-all`}>{status}</p>
      </div>
    </div>
  )
}

export default Task
