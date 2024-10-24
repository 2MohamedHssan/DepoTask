import React from 'react'
import { NavLink } from 'react-router-dom'
function Card({index,data}) {
  return (
    <div data-aos="fade-up">
      <div className='bg-white p-2 animatlinedown animatlineleft rounded-md shadow-md'>
        <div className='container flex gap-x-5 mx-auto'>
          <img className='h-16 w-16 rounded-full ml-1' src={`../${data.img}`} alt={`imge ${index}`} />
          <h1 className='text-center font-bold text-2xl m-0 pt-4'>Eng.{data.name}</h1>
        </div>
        <div className='text-slate-500 p-2 flex flex-col mt-5 gap-2'>
          <p><strong>Job Title : </strong> {data.title}</p>
          <p><strong>Job Type : </strong> {data.type}</p>
          <p><strong>Company Name : </strong> <span className='text-[#00a5a9] font-bold'>{data.company}</span> </p>
        </div>
        <button title={`See More about ${data.name}`} className=' bg-[#00a5a9] hover:bg-[#00a6a9ae] px-4 py-2 ml-2 mt-2 block w-fit text-white rounded-md'>
          <NavLink to={`/user/${data.id}`}>More</NavLink></button>
      </div>
    </div>
  )
}

export default Card