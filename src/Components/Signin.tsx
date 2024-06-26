

import signupimg from "../assets/login_pic.png"
import google from "../assets/google.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cloudtopg-auth-api-service.onrender.com/auth/login', formData);
      toast.success('Login successful');
      const { token } = response.data;
      localStorage.setItem('token', token); // Store the token in localStorage
      navigate('/'); // Redirect to home after successful signin
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('Invalid email or password');
    }
  };

  return (
    <>
    <div className="flex justify-center">
        <div className="w-[80%] flex flex-col ">
            <div className='flex flex-row justify-between items-center mt-10'>
                <Link to="/"><h2 className='text-center text-[2rem]'>CloudtopG</h2></Link>
                <h2>New User? <Link to="/signup">Sign Up</Link></h2>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="mt-[100px] basis-[60%]">
                    <img src={signupimg} alt="clouptop signup" width="100%"/>
                </div>
                <div className="flex flex-col mt-[100px] basis-[40%]">
                   <div>
                        <h2 className="font-bold text-[2rem]">Welcome Back!</h2>
                        <p>Login to continue</p>
                   </div>
                   <div>
                            <form className="mt-20 flex flex-col gap-10" onSubmit={handleSubmit}>

                                <div className="relative">
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    className="w-[100%] md:w-[80%] block flex-1 border-2 h-[65px] 
                                    border-black py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 
                                    focus:ring-0 sm:text-[1.4rem] sm:leading-6 pl-10"
                                    placeholder="Email"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>

                                    </div>
                                </div>


                                <div className="relative">
                                    <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="password"
                                    onChange={handleChange}
                                    className="w-[100%] md:w-[80%] block flex-1 border-2 h-[65px] 
                                    border-black py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 
                                    focus:ring-0 sm:text-[1.4rem] sm:leading-6 pl-10"
                                    placeholder="Password"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>

                                    </div>
                                </div>

                                <div className="flex flex-row items-center gap-5 mt-10">
                                        <button type="submit" className="bg-[#6534D9] text-white text-center w-[30%] p-3 rounded-3xl">Login </button>
                                        <p>FORGET PASSWORD?</p>
                                </div>

                                <div className="flex flex-row items-center gap-10 mt-10">
                                        <p>Login with</p> 
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

export default Signin;