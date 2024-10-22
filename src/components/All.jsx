// import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const All = () => {
  const [data, setData] = useState([])
  
  const getData = async () => {    
    const response = await fetch('https://datainfo-4cf8.onrender.com/')
    console.log("get data")
    const result = await response.json()
    if(response.ok){
      setData(result)
    }
    else{
      console.log("Error")
    }
    }

    const handleDelete = async (id) => {
      const response = await fetch(`https://datainfo-4cf8.onrender.com/${id}`,{
        method:"DELETE"
      })

      const result = await response.json();

      if(response.ok){
        console.log(`Deleted ${result}`)
        getData()
      }
      else{
        console.log("Error")
      }
    }



  useEffect(() => {
    getData()
  }, [])

  
  return (
    <>
    <div className="container flex flex-wrap gap-2">
      
    {data.map((e)=>(
    <div key={e._id} className="bg-white shadow-md rounded-lg p-6 mb-4 my-6 w-full">
      <h2 className="text-xl font-bold text-gray-800">{e.name}</h2>
      <p className="text-gray-700">Email: {e.email}</p>
      <p className="text-gray-700">Age: {e.age}</p>
      <div className="mt-4 flex justify-between">
        <Link to={`${e._id}`}>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
          Update
        </button>
          </Link>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>{handleDelete(e._id)}}
        >
          Delete
        </button>
      </div>
    </div>
    ))}
    
    </div>
    </>
  );
};

export default All;
