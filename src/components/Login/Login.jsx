import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [forminput, setFormInput] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...forminput, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(forminput);
    }
    return (
        <>
            <section className='flex justify-center items-center'>
                <div className='absolute top-0 left-0  w-full h-screen bg-white overflow-x-auto flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
                        <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>Login</h2>
                        <form className='space-y-4' onSubmit={handleSubmit}>
                            <div>
                                <label className='block text-gray-600 text-sm font-medium mb-1'>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={forminput.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                    className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-600 text-sm font-medium mb-1'>Password</label>
                                <input
                                    name='password'
                                    value={forminput.password}
                                    onChange={handleChange}
                                    type='password'
                                    placeholder='Enter your password'
                                    className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <button
                                type='submit'
                                className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200'
                            >
                                Login
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                            <span className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <Link
                                    to="/sign-up"
                                    className="text-blue-600 hover:underline"
                                >
                                    Sign up now
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login