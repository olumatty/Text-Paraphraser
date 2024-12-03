'use client'
import React, { useState } from 'react'

const Parapraser = () => {
    const [inputText, setInputText] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const handleParaphrase = async () => {
        
    }
  return (
    <div className='p-10 flex flex-col justify-center items-center '> 
        <h1 className='text-center text-2xl md:text-3xl font-bold '>Text Paraphraser</h1>
      <div className='md:space-x-10 md:mt-6 mmd:mb-3' >
        <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} rows={10} className='border mt-3 h-[280px] md:h-[320px] w-[300px] md:w-[360px] outline-none rounded'/>
        <textarea value={result} readOnly rows={10} className='border mt-3 h-[280px] md:h-[320px] w-[300px] md:w-[360px] outline-none rounded'/>
      </div>
      <button className='mt-3 md:mt-6 bg-blue-500 w-full h-10 md:w-[600px] text-white font-bold rounded '>Submit</button>
    </div>
  )
}

export default Parapraser
