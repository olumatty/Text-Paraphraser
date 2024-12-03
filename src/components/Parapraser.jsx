'use client'
import React, { useState } from 'react'

const Parapraser = () => {
    const [inputText, setInputText] = useState("")
  return (
    <div className='p-10 flex flex-col justify-center items-center '> 
        <h1 className='text-center text-2xl font-bold '>Text Paraphraser</h1>
      <div>
        <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} rows={10} className='border mt-3 h-[280px] w-[300px] outline-none rounded'/>
        <textarea rows={10} className='border mt-3 h-[280px] w-[300px] outline-none rounded'/>
      </div>
      <button className='mt-3 bg-blue-500 w-full h-10 text-white font-bold rounded '>Submit</button>
    </div>
  )
}

export default Parapraser
