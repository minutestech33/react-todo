import React, { useContext } from 'react'
import Task from '../../components/Task'
import { DataContext } from '../../context/DataContext'
import NoTask from '../../components/NoTask'

function New() {
  const { tasks } = useContext(DataContext)
  let newTasks = tasks.filter(task => task.status === 'New')
  return (
    <div className='w-full'>
      {
        newTasks.length === 0 ? (
          <NoTask txt={'No new task'} />
        ) : (
          <div className='w-full flex flex-col gap-[1px]'>
            {
              newTasks.map((item, index) => {
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

export default New
