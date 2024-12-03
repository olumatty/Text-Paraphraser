import React from 'react'

const Parapraser = () => {
  return (
    <div className='p-10 flex flex-col justify-center items-center '> 
        <h1 className='text-center text-2xl font-bold '> Text Paraphraser</h1>
      <div>
        <textarea rows={10} className='border mt-3 h-[280px] w-[300px] outline-none rounded'/>
        <textarea rows={10} className='border mt-3 h-[280px] w-[300px] outline-none rounded'/>
      </div>
      <button className='mt-3'>Paraphrase</button>
    </div>
  )
}

export default Parapraser
