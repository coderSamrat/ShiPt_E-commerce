import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault();
            if (email && password.length >= 8) {
                  toast.success('Login Successful', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                  });
            } else if (!email || !password) {
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
            }
      };

      return (
            <div className="flex items-center justify-center h-screen bg-gray-200">
                  <form onSubmit={handleSubmit} className="shadow-3xl rounded md:px-8 px-3 pt-6 pb-8 mb-4 w-96">
                        <h2 className="text-center mb-6 text-2xl font-bold">Login</h2>
                        <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                              </label>
                              <input
                                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-pink-500"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-6">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-1 focus:outline-pink-500"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="flex items-center gap-4 flex-col">
                              <button
                                    className="bg-pink-500 hover:bg-pink-600 text-gray-200 font-bold w-full py-2 px-4 rounded focus:outline-1 focus:outline-pink-500"
                                    type="submit"
                              >
                                    Login
                              </button>
                              <ToastContainer />
                              <div className='w-full flex justify-between'>
                                    <span className="text-gray-600 flex gap-2 items-center">
                                          <input type="checkbox" name="" id="check" className='cursor-pointer' />
                                          <label htmlFor="check" className='cursor-pointer'>Remember me</label>
                                    </span>
                                    <a href="#" className='hover:underline text-gray-600'>Forgot Password</a>
                              </div>
                        </div>
                        <div className='pt-6'>
                              <p className="text-center text-gray-500 text-sm">
                                    Don't have an account? <a href="/signup" className='hover:underline text-md hover:text-blue-600 font-semibold'>Sign up</a>
                              </p>
                        </div>
                  </form>
            </div>
      );
};

export default Login;
