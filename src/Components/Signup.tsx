import signupimg from "../assets/login_pic.png"
import google from "../assets/google.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import { Link } from "react-router-dom"



const Signup = () => {
  return (
    <>
    <div className="flex justify-center">
        <div className="w-[80%] flex flex-col">
            <div className='flex flex-row justify-between items-center mt-10'>
                <h2 className='text-center text-[2rem]'>Cloudtop</h2>
                <h2>Existing User? <Link to="/signin">Login</Link></h2>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="mt-[100px] basis-[60%]">
                    <img src={signupimg} alt="clouptop signup" width="100%"/>
                </div>
                <div className="flex flex-col mt-[100px] basis-[40%]">
                   <div>
                        <h2 className="font-bold text-[2rem]">User registration</h2>
                   </div>
                   <div>
                            <form className="mt-20 flex flex-col gap-10">
                                {/* Fullname input field*/}
                                <div className="relative">
                                    <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    autoComplete="username"
                                    className="w-[80%] block flex-1 border-2 h-[65px] 
                                    border-black py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 
                                    focus:ring-0 sm:text-[1.4rem] sm:leading-6 pl-10"
                                    placeholder="Fullname"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                </div>


                                {/*Email  input field*/}
                                <div className="relative">
                                    <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    autoComplete="username"
                                    className="w-[80%] block flex-1 border-2 h-[65px] 
                                    border-black py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 
                                    focus:ring-0 sm:text-[1.4rem] sm:leading-6 pl-10"
                                    placeholder="Email"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>

                                    </div>
                                </div>

                                {/*Password input field*/}
                                <div className="relative">
                                    <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    autoComplete="username"
                                    className="w-[80%] block flex-1 border-2 h-[65px] 
                                    border-black py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 
                                    focus:ring-0 sm:text-[1.4rem] sm:leading-6 pl-10"
                                    placeholder="Password"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>

                                    </div>
                                </div>

                                <div className="flex flex-row items-center gap-5 mt-10">
                                        <button className="bg-[#6534D9] text-white text-center w-[30%] p-3 rounded-3xl">Sign up</button>
                                        <p>Existing user? Login</p>
                                </div>

                                <div className="flex flex-row items-center gap-10 mt-10">
                                        <p>Signup with</p> 
                                        <div className="bg-[#F4F2F8] rounded-full p-2"><img src={google} width="20px"/></div>
                                        <div className="bg-[#F4F2F8] rounded-full p-2"><img src={facebook} width="20px"/></div>
                                        <div className="bg-[#F4F2F8] rounded-full p-2"><img src={twitter} width="30px"/></div>
                                </div>
                        </form>
                   </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Signup