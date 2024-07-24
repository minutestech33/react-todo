import React, { useContext } from 'react'
import Task from '../../components/Task'
import { DataContext } from '../../context/DataContext'
import NoTask from '../../components/NoTask'

function Starred() {
  const { tasks } = useContext(DataContext)
  let starTasks = tasks.filter(task => task.status === 'Starred')
  return (
    <div className='w-full'>
      {
        starTasks.length === 0 ? (
          <NoTask txt={'No star task'} />
        ) : (
          <div className='w-full flex flex-col gap-[1px]'>
            {
              starTasks.map((item, index) => {
                return (
                  <Task key={index} index={index} id={item.id} title={item.title} status={item.status} />
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default Starred