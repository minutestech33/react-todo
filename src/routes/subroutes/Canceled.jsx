import React, { useContext } from 'react'
import Task from '../../components/Task'
import { DataContext } from '../../context/DataContext'
import NoTask from '../../components/NoTask'

function Canceled() {
  const { tasks } = useContext(DataContext)
  let canceledTasks = tasks.filter(task => task.status === 'Canceled')
  return (
    <div className='w-full'>
      {
        canceledTasks.length === 0 ? (
          <NoTask txt={'No canceled task'} />
        ) : (
          <div className='w-full flex flex-col gap-[1px]'>
            {
              canceledTasks.map((item, index) => {
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

export default Canceled