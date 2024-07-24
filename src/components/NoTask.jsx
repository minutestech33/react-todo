import React from 'react'

function NoTask({txt}) {
    return (
        <div className='w-full h-[70vh] flex justify-center items-center'>
            <p className='text-md font-medium text-gray-500'>{txt}</p>
        </div>
    )
}

export default NoTask
