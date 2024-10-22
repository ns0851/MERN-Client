// import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    const getSingleUser = async () => {

        const response = await fetch(`https://datainfo-4cf8.onrender.com/${id}`)
        const result = await response.json()

        if (response.ok) {
            console.log(result)
            setName(result.name)
            setEmail(result.email)
            setAge(result.age)
        }
    }

    useEffect(() => {
        getSingleUser()
    }, [])


    const handleEdit = async (e) => {
        e.preventDefault();

        const updateUser = {
            name,
            email,
            age,
        };

        try {
            const response = await fetch(`https://datainfo-4cf8.onrender.com/${id}`, {
                method: "PATCH",
                body: JSON.stringify(updateUser),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                console.log(result);
                setName("");
                setEmail("");
                setAge("");
                navigate('/all');
            } else {
                console.error(result.error || 'Error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="text-center mb-8 translate-y-[-150px]">
                <h1 className="text-5xl font-bold text-gray-800">Edit The Data</h1>
            </div>
            <div className="bg-white shadow-md translate-y-[-100px] rounded-lg p-10 w-full max-w-lg">
                <form onSubmit={handleEdit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter Name Here'
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Email Here'
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="age">
                            Age
                        </label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder='Enter Age'
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded w-full transition-all duration-200"
                    >

                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Update
