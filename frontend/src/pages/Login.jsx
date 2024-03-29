import React, { useState } from 'react';

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">
            </div>
            <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
                <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
                    <div className="self-start hidden lg:flex flex-col text-gray-300">
                        <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
                        <p className="pr-3 text-sm opacity-75">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
                        <div className="mb-7">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-400">Don't have an account? <a href="#" className="text-sm text-purple-700 hover:text-purple-700">Sign Up</a></p>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <input className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400" type="email" placeholder="Email" />
                            </div>
                            <div className="relative">
                                <input placeholder="Password" type={showPassword ? 'text' : 'password'} className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400" />
                                <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                                    <svg onClick={() => setShowPassword(!showPassword)} className="h-4 text-purple-700 cursor-pointer" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm ml-auto">
                                    <a href="#" className="text-purple-700 hover:text-purple-600">Forgot your password?</a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                                    Sign in
                                </button>
                            </div>
                            <div className="flex items-center justify-center space-x-2 my-5">
                                <span className="h-px w-16 bg-gray-100"></span>
                                <span className="text-gray-300 font-normal">or</span>
                                <span className="h-px w-16 bg-gray-100"></span>
                            </div>
                            <div className="flex justify-center gap-5 w-full ">
                                <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500">
                                    <svg className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/></svg>
                                    <span>Google</span>
                                </button>
                                <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500 px-">
                                <svg className="w-4 mr-2" viewBox="0 0 100 100" style={{ enableBackground: "new 0 0 100 100" }} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    <style>{`.st0{fill:#fff}.st1{fill:#f5bb41} /*... rest of the styles ... */}`}</style>
    <g id="Layer_1"/>
    <g id="Layer_2">
      <path d="M50 2.5c-58.892 1.725-64.898 84.363-7.46 95h14.92c57.451-10.647 51.419-93.281-7.46-95z" style={{fill:"#1877f2"}}/>
      <path d="M57.46 64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021V22.101c-12.894-2.323-28.385-1.616-28.722 17.66V50.29H30.417v13.814H42.54V97.5h14.92V64.104z" style={{fill:"#f1f1f1"}}/>
    </g>
  </svg>                                    <span>Facebook</span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-7 text-center text-gray-300 text-xs">
                            <span>
                                Copyright © 2021-2023
                                <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Codepen aji" className="text-purple-500 hover:text-purple-600 ">AJI</a></span>
                        </div>
                    </div>
                </div>
            </div>
    
        <footer className="bg-transparent absolute w-full bottom-0 left-0 z-30">
            <div className="container p-5 mx-auto  flex items-center justify-between ">
                <div className="flex mr-auto">
                    <a href="https://codepen.io/uidesignhub" target="_blank" title="codepen aji" className="text-center text-gray-700 focus:outline-none"><img src="/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className="object-cover mx-auto w-8 h-8 rounded-full w-10 h-10"/><p className="text-xl">aji<strong>mon</strong></p> </a>
                </div>
            </div>
        </footer>

        <svg class="absolute bottom-0 left-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </>
);
};

export default SignInForm;
