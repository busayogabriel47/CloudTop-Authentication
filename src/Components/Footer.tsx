
import simple from "../assets/simple.svg"



const Footer = () => {
  return (
    <>
        {/*Customer review*/}
        <div className='flex justify-center mt-8'>
            <div className='flex flex-col mt-[3rem] w-[70%]'>

                <div className='flex flex-col md:flex-row justify-between gap-1 md:gap-10'>
                    <div className='flex justify-start w-full'>
                        <div className='w-[70%] flex flex-col items-left py-[3rem]'>
                            <img src={simple} width="50%"/>
                            <p>mikayla_beer@feil.name 906-179-8309</p>
                        </div>
                    </div>
                    <div className='flex justify-start w-full'>
                        <div className='w-[70%] flex flex-col items-left py-[3rem]'>
                                <h2 className='font-bold text-[1.2rem]'>Get in Touch</h2>
                                <p className='py-[1rem]'>Don’t miss any updates of our new templates and extensions.!
                                </p>
                                <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    autoComplete="username"
                                    className="w-[100%] block flex-1 border-2 h-[40px] 
                                    py-1 text-gray-900 placeholder:text-gray-400 
                                    focus:ring-0 sm:text-[1.4rem] sm:leading-6 pl-4"
                                    placeholder="Email"
                                    />
                                    <button type="button" className="text-white bg-[#000] w-[50%] mt-5 hover:bg-[#000] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800">Get started</button>
                        </div>
                    </div>
                    <div className='flex justify-start w-full'>
                        <div className='w-[70%] flex flex-col items-left py-[3rem]'>
                            <h2 className='font-bold text-[1.2rem]'>Our Guidelines</h2>
                            <ul className='py-[1rem]'>
                                <li>Terms</li>
                                <li>Privacy policy</li>
                                <li>Cookies Policy</li>
                                <li>Discover</li>
                            </ul>
                            
                        </div>
                    </div>

                    <div className='flex justify-start w-full'>
                        <div className='w-[70%] flex flex-col items-left py-[3rem]'>
                            <h2 className='font-bold text-[1.2rem]'>Our address</h2>
                            <p className='py-[1rem]'>518 Schmeler Neck Bartlett. Illinois
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer