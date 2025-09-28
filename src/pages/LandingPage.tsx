import React from 'react';
import { useState } from 'react';

const LandingPage: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
        {/* web view */}
        <div className="sm:flex sm:flex-row min-h-[570px] overflow-y-auto hidden w-full">
            <div className="flex flex-col w-1/2 text-left bg-[#04020E] pl-20">
                <div className='pt-40 font-baloo font-normal'>
                    <h1 className='text-4xl text-white font-normal'>
                        Better Budget
                    </h1>
                    <p className='pl-2'>please enter your info, cutie :)</p>
                </div>
                <div>
                    <form>
                        <div className="mb-4 mt-12">
                            <label htmlFor="email" className="block text-white mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-52 md:w-76 lg:w-96 p-2 bg-[#3F3F3F] border-2 border-[#04020E] focus:border-[#8B5CF6] focus:outline-none rounded transition-colors duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-white mb-1">Password</label>
                            <div className="w-52 md:w-76 lg:w-96 relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-52 md:w-76 lg:w-96 p-2 bg-[#3F3F3F] border-2 border-[#04020E] focus:border-[#8B5CF6] focus:outline-none rounded"
                                />
                                <img
                                    src={passwordVisible ? "/open-icon.svg" : "/closed-icon.svg"}
                                    alt="Toggle Password Visibility"
                                    className="w-8 h-8 absolute top-2 right-4 cursor-pointer transition-all duration-600"
                                    onClick={() => setPasswordVisible((v) => !v)}
                                />
                            </div>

                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                id="remember-checkbox"
                                type="checkbox"
                                className="w-4 h-4 accent-[#8B5CF6] text-[#8B5CF6] bg-gray-100 border-gray-300 rounded-sm"
                            />
                            <label htmlFor="remember-checkbox" className="ms-2 text-base font-medium text-white">
                                Remember me for 2 weeks
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-56 md:w-76 lg:w-100 h-12 mt-12 bg-[#8B5CF6] flex justify-center items-center text-white text-xl font-extrabold py-2 px-4 rounded-sm hover:bg-[#7c3aed] transition-colors duration-200"
                        >
                            Log In or Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex w-1/2 bg-[#8B5CF6] p-4 text-white justify-center items-center">
                <img src="/logo_1.jpg" alt="Logo" className="h-62 w-62 rounded-[120px]" />
            </div>
        </div>
        {/* mobile view */}
        <div className='sm:hidden flex flex-col w-full h-screen bg-[#04020E] min-h-[570px] overflow-y-auto text-white items-center'>
            <div>
                <img src="/mobile_logo.jpg" alt="Logo" className="h-48 w-48 mt-12 rounded-[140px]" />
            </div>
            <div className='flex flex-col w-full mt-20 items-start'>
                <form className='pl-4 w-full box-border'>
                        <div className="flex flex-col w-[94%] mb-4">
                            <label htmlFor="email" className="text-white text-left mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full h-16 p-2 bg-[#3F3F3F] border-2 border-[#04020E] focus:border-[#8B5CF6] focus:outline-none rounded-lg transition-colors duration-200"
                            />
                        </div>
                        <div className="flex flex-col w-[94%] mb-4">
                            <label htmlFor="password" className="text-left text-white mb-1">Password</label>
                            <div className="w-full md:w-76 lg:w-96 relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-full h-16 p-2 bg-[#3F3F3F] border-2 border-[#04020E] focus:border-[#8B5CF6] focus:outline-none rounded-lg"
                                />
                                <img
                                    src={passwordVisible ? "/open-icon.svg" : "/closed-icon.svg"}
                                    alt="Toggle Password Visibility"
                                    className="w-8 h-8 absolute top-4 right-4 cursor-pointer transition-all duration-600"
                                    onClick={() => setPasswordVisible((v) => !v)}
                                />
                            </div>

                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                id="remember-checkbox"
                                type="checkbox"
                                className="w-4 h-4 accent-[#8B5CF6] text-[#8B5CF6] bg-gray-100 border-gray-300 rounded-sm"
                            />
                            <label htmlFor="remember-checkbox" className="ms-2 text-base font-medium text-white">
                                Remember me for 2 weeks
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-[96%] h-12 mt-12 mb-4 bg-[#8B5CF6] flex justify-center items-center text-white text-xl font-extrabold py-2 px-4 rounded-sm hover:bg-[#7c3aed] transition-colors duration-200"
                        >
                            Log In or Sign Up
                        </button>
                    </form>
            </div>
        </div>
        </>
        
    );
};

export default LandingPage;