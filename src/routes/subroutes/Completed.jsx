import React, { useContext } from 'react'
import Task from '../../components/Task'
import { DataContext } from '../../context/DataContext'
import NoTask from '../../components/NoTask'

function Completed() {
  const { tasks } = useContext(DataContext)
  let completedTasks = tasks.filter(task => task.status === 'Completed')
  return (
    <div className='w-full'>
      {
        completedTasks.length === 0 ? (
          <NoTask txt={'No completed task'} />
        ) : (
          <div className='w-full flex flex-col gap-[1px]'>
            {
              completedTasks.map((item, index) => {
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

export default Completed