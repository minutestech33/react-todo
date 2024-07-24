import React, { useContext } from 'react'
import Task from '../../components/Task'
import { DataContext } from '../../context/DataContext'
import NoTask from '../../components/NoTask'

function Running() {
  const { tasks } = useContext(DataContext)
  let runningTasks = tasks.filter(task => task.status === 'Running')
  return (
    <div className='w-full'>
      {
        runningTasks.length === 0 ? (
          <NoTask txt={'No running task'} />
        ) : (
          <div className='w-full flex flex-col gap-[1px]'>
            {
              runningTasks.map((item, index) => {
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

export default Running
