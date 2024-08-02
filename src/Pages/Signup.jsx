import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault();
            if (email && name && password.length >= 8) {
                  toast.success('Your Account Created Successfully', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                  });
            } else if (password.length < 8) {
                  toast.error('Password must be at least 8 characters long.', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                  });
            } else {
                  toast.error('Please fill in all fields.', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                  });
            }
      };

      return (
            <div className="flex items-center justify-center h-[88vh] bg-gray-200">
                  <form onSubmit={handleSubmit} className="shadow-3xl rounded md:px-8 px-3 pt-6 pb-8 mb-4 w-96">
                        <h2 className="text-center mb-6 text-gray-600 text-2xl font-bold">Sign Up</h2>
                        <div className="mb-4">
                              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="name">
                                    Full Name
                              </label>
                              <input
                                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-1 focus:outline-pink-500"
                                    id="name"
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                              </label>
                              <input
                                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-1 focus:outline-pink-500"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-6">
                              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-1 focus:outline-pink-500"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                              <button
                                    className="bg-pink-500 hover:bg-pink-600 text-gray-200 font-bold w-full py-2 px-4 rounded focus:outline-1 focus:outline-pink-500"
                                    type="submit"
                              >
                                    Create An Account
                              </button>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                              <span className="text-gray-600 flex gap-2 items-center">
                                    <input type="checkbox" name="" id="check" className='cursor-pointer' />
                                    <label htmlFor="check" className='cursor-pointer'>Remember me</label>
                              </span>
                              <a href="#" className='hover:underline text-gray-600'>Forgot Password</a>
                        </div>
                        <div className='text-gray-600 mb-4'>
                              <input type="checkbox" name="" id="terms" required className='cursor-pointer' />
                              <label htmlFor="terms" className='text-sm'>By continuing, I accept the terms of use & privacy policy</label>
                        </div>
                        <div className=''>
                              <p className="text-center text-gray-500 text-sm">
                                    Already have an account? <a href="/login" className='hover:underline text-md hover:text-blue-600 font-semibold'>Login Here</a>
                              </p>
                        </div>
                        <ToastContainer />
                  </form>
            </div>
      );
};

export default Signup;
