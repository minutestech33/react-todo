import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TabLink from '../components/TabLink'
import { routes } from '../utils/utils'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import { useTaskId } from '../hooks/useTaskId'

function Home() {
  const [task, setTask] = useState("")
  const { tasks, setTasks } = useContext(DataContext)
  const cpath = useLocation().pathname

  const taskId = useTaskId()

  const taskInputHandler = () => {
    if (!task) return false;

    const handleTaskInsertation = (status) => {
      setTask("");
      if (!['/new', '/running', '/completed', '/canceled', '/starred'].includes(cpath)) {
        localStorage.setItem(status, 'added');
      }
      return setTasks(prev => [{
        id: taskId,
        title: task,
        status
      }, ...prev])
    }
    if (['/', '/new', '/settings'].includes(cpath)) handleTaskInsertation('New')
    switch (cpath) {
      case '/running':
        handleTaskInsertation('Running')
        break;
      case '/completed':
        handleTaskInsertation('Completed')
        break;
      case '/canceled':
        handleTaskInsertation('Canceled')
        break;
      case '/starred':
        handleTaskInsertation('Starred')
        break;
    }
  }

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <div className='w-full h-screen bg-gray-200'>
      <div className='max-w-[800px] m-auto max-lg:px-3'>
        <div className='h-[13vh] w-full flex items-center max-md:items-start max-md:pt-3 max-md:h-[11vh]'>
          <div className='w-full flex gap-2'>
            <input onKeyDown={(e) => {
              if (e.key === 'Enter') {
                taskInputHandler();
              }
            }} onChange={(e) => setTask(e.target.value)} className='w-full px-4 py-[14px] text-sm rounded-md bg-white text-gray-700 font-medium border-2 border-white outline-none placeholder:text-gray-400 caret-gray-400 focus:border-blue-500 transition-all' type="text" placeholder={"Add task to " + (cpath.slice() === "/" || cpath.slice() === "/settings" ? 'new' : cpath.slice(1))} name='task' autoComplete='off' value={task} />
            <button className='w-[90px] bg-blue-500 text-sm font-medium rounded-md text-white hover:cursor-pointer active:scale-90 transition-all flex-shrink-0'>Filter</button>
            <button className='w-[90px] bg-blue-500 text-sm font-medium rounded-md text-white hover:cursor-pointer active:scale-90 transition-all flex-shrink-0'>Sort</button>
          </div>
        </div>
        <div className='h-[6vh] max-md:h-[7vh] w-full flex gap-3 border-b border-gray-300 max-md:overflow-x-scroll'>
          {
            routes.map((item, index) => {
              return (
                <TabLink key={index} title={item.title} action={item.action} />
              )
            })
          }
        </div>
        <div className='h-[81vh] w-full overflow-y-scroll pt-5 pb-6 max-md:h-[82vh]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home
