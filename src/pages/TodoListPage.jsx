import React from 'react'

function TodoListPage() {
  return (
    <div className='bg-purple-950 h-screen'>
      <div className='flex justify-center'>
        <div className='bg-[#1e1e1e] w-sm mt-40 rounded-lg'>
          <div className='p-8'>
            <h1 className='text-white text-4xl'>My Todo</h1>
            <input className= ' text-white mt-4 pb-2 w-xs outline-0' placeholder='new task' ></input>
            <hr className='text-[#6c7076] ' />
            <form className='mt-4' action="/">
              <input type="checkbox" />
              <label className='text-white pl-4'>Learn React</label> <br />
              <input type="checkbox" />
              <label className='text-white pl-4 '>Learn javascript</label> <br />
              <input type="checkbox" />
              <label className='text-white pl-4'>Learn CSS</label>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TodoListPage