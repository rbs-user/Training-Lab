import React from 'react'

const login = () => {
  return (
    <div className="text-2xl font-medium text-white text-center">
            <p>The VSlue is Count is : {count}</p>
            <button className="p-2 bg-slate-200 shadow rounded text-gray-800 m-4 active:bg-slate-400" onClick={()=>
                setCount(count-1);
            }></button>
        </div>
        <div className='w-1/2 flex flex-col justify-center gap-4 items-center'>
            <h1 className='text-2xl'></h1>
        </div>
  )
}

export default login
