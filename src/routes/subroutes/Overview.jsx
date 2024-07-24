import React, { useContext } from 'react'
import OverviewCard from '../../components/OverviewCard'
import Task from '../../components/Task'
import { DataContext } from '../../context/DataContext'

function Overview() {
  const {tasks} = useContext(DataContext)
  let newTasks = tasks.filter(task => task.status === 'New')
  return (
    <div className='w-full'>
      <div className='w-full grid grid-cols-5 gap-1 max-sm:grid-cols-3 max-[500px]:grid-cols-2'>
        <OverviewCard title={'New'} number={tasks.filter(item => item.status === 'New').length} color={'bg-blue-500'} />
        <OverviewCard title={'Running'} number={tasks.filter(item => item.status === 'Running').length} color={'bg-orange-500'} />
        <OverviewCard title={'Completed'} number={tasks.filter(item => item.status === 'Completed').length} color={'bg-emerald-500'} />
        <OverviewCard title={'Canceled'} number={tasks.filter(item => item.status === 'Canceled').length} color={'bg-rose-500'} />
        <OverviewCard title={'Starred'} number={tasks.filter(item => item.status === 'Starred').length} color={'bg-violet-500'} />
      </div>
      {newTasks.length !== 0 && <p className='text-md font-bold text-gray-700 mt-5 ml-2'>Added Tasks</p>}
      <div className='w-full flex flex-col gap-[1px] mt-3'>
        {
          newTasks.map((item, index) => {
            return (
              <Task key={index} index={index} id={item.id} title={item.title} status={item.status} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Overview
