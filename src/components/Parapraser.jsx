"use client";
import React, { useState } from "react";

const Parapraser = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);


  const handleParaphrase = async () => {
    if (!inputText) {
      setResult("Please provide text to paraphrase");
      return;
    }
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append("apikey", "Tn0TYjIRfsPJVj6j98QvwWM5ZlsBQqVs");
    myHeaders.append("Content-Type", "text/plain");

    var raw = inputText
  
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body:raw
    };
  

    try {
      const response = await fetch("https://api.apilayer.com/paraphraser", requestOptions);

    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();
      setResult(data?.paraphrased || "No paraphrased text found")
    } catch (error) {
      setResult("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-10 flex flex-col justify-center items-center ">
      <h1 className="text-center text-2xl md:text-3xl font-bold ">
        Text Paraphraser
      </h1>
      <div className="md:space-x-10 md:mt-6 mmd:mb-3">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={10}
          className="border mt-3 p-2 h-[280px] md:h-[320px] w-[300px] md:w-[360px] outline-none rounded"
        />
        <textarea
          value={result || ''}
          readOnly
          rows={10}
          className="border mt-3 h-[280px] md:h-[320px] w-[300px] md:w-[360px] outline-none rounded"
        />
      </div>
      <button onClick={handleParaphrase} className="mt-3 md:mt-6 bg-blue-500 w-full h-10 md:w-[600px] text-white font-bold rounded ">
        {loading ? "Loading...":"Paraphrase"}
      </button>
    </div>
  );
};

export default Parapraser;
