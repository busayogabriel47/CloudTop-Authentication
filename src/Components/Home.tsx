import Navbar from './Navbar'
import banner from "../assets/banner.svg"
import group1 from "../assets/Group1.svg"
import group2 from "../assets/Group2.svg"
import group3 from "../assets/Group3.svg"
import group4 from "../assets/Group4.png"
import group5 from "../assets/Group5.png"
import group6 from "../assets/Group6.svg"
import group7 from "../assets/Group7.svg"
import group8 from "../assets/Group8.svg"
import group9 from "../assets/Group9.svg"
import faceOne from "../assets/face1.jpg"
import faceTwo from "../assets/face2.jpg"
import faceThree from "../assets/face3.jpg"
import contactbg from "../assets/contact-bg.jpg"
import Footer from './Footer'




function Home() {
  return (
    <>
    <div className='flex flex-col bg-[#F7F8FA] h-[70%]'>
        <Navbar/>

        <div className='flex justify-center'>
            <div className='w-[70%] mt-[2rem] text-center'>
                <h1 className='text-[2.5rem] font-bold'>Search engine optimisation & <br/> Marketing.</h1>
                <p>Simple is a simple template with a creative design that solves all your marketing and SEO queries.</p>
                <div className='flex gap-5 justify-center mt-5'>
                    <button className='bg-[#FEC4AF] text-[#FC826A] px-[1.4rem] py-[0.7rem]'>Get Started</button>  
                    <button className='bg-[#B7EDDD] text-[#82DABD] px-[1.4rem] py-[0.7rem]'>Learn more</button>
                </div>

                <div className='flex justify-center'>
                    <img src={banner} alt=''/>
                </div>
            </div>
        </div>

    </div>

        {/*How does it work */}
        <div className='flex justify-center'>
            <div className='flex flex-col mt-[3rem] w-[70%]'>
                <div className='text-center'>
                    <h2 className='text-[2rem] font-medium'>How does it works</h2>
                    <p>One theme that serves as an easy-to-use operational toolkit that meets customer's needs.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-between gap-5 mt-[5rem]'>
                    <div className='basis-[30%] md:basis-[100%] md:place-items-start md:text-left flex flex-col items-center pr-[0rem] md:pr-[10rem] text-center'>
                        <img src={group1}/>
                        <h3 className='my-[1.5rem] font-medium text-[1.2rem] w-full'>Speed <br/>Optimisation</h3>
                        <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                        </p>

                        <button className='mt-5'>Readmore</button>
                    </div>
                    <div className='basis-[30%] md:basis-[100%] md:place-items-start md:text-left flex flex-col items-center pr-[0rem] md:pr-[10rem] text-center'>
                        <img src={group2}/>
                        <h3 className='my-[1.5rem] font-medium text-[1.2rem]'>Speed <br/>Optimisation</h3>
                        <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                        </p>

                        <button className='mt-5'>Readmore</button>
                    </div>
                    <div className='basis-[30%] md:basis-[100%] md:place-items-start md:text-left flex flex-col items-center pr-[0rem] md:pr-[10rem] text-center'>
                        <img src={group3}/>
                        <h3 className='my-[1.5rem] font-medium text-[1.2rem]'>Speed <br/>Optimisation</h3>
                        <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                        </p>

                        <button className='mt-5'>Readmore</button>
                    </div>
                </div>

            </div>
        </div>

        {/* We offer */}
        <div className='flex justify-center'>
            <div className='flex flex-col mt-[3rem] w-[70%]'>
               
                <div className='flex flex-col md:flex-row justify-between gap-5 mt-[5rem]'>
                
                    <div className='basis-[100%] md:basis-[50%] text-center md:text-left md:pr-[10rem]'>
                        
                        <h3 className='my-[1.5rem] font-medium text-[1.2rem]'>We Offer a Full Range of Digital Marketing Services!</h3>
                        <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                        </p>

                        <button className='mt-5'>Readmore</button>
                    </div>
                    <div className='basis-[100%] md:basis-[50%] md:pr-[10rem]'>
                        <img src={group4}/>
                    </div>
                </div>
            </div>
        </div>


        {/* Leading */}
        <div className='flex justify-center'>
            <div className='flex flex-col mt-[3rem] w-[70%]'>
               
                <div className='flex flex-col md:flex-row justify-around mt-[5rem]'>
                
                    <div className='flex basis-[60%] justify-center'>
                        
                        <div>
                             <img src={group5}/>
                        </div>
                    </div>
                    <div className='basis-[100%] md:basis-[40%] md:pr-[10rem] flex flex-col text-center md:text-left'>
                    <h3 className='my-[1.5rem] font-medium text-[2rem]'>
                        Leading Digital Agency for Business Solution.</h3>
                        <p>
                        Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances.
                        </p>

                        <p className='mt-5'>
                        Its smart features make it a powerful stand-alone website building tool.
                        </p>


                        <button type="button" className="mt-10 text-white bg-[#1998FF] hover:bg-[#1998FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>
                        
                    </div>
                </div>
            </div>
        </div>


         {/*Our Case study */}
         <div className='flex justify-center'>
            <div className='flex flex-col mt-[3rem] w-[70%]'>
                <div className='text-center'>
                    <h2 className='text-[2rem] font-medium'>Our case studies</h2>
                    <p>Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-between text-center gap-10 mt-[5rem]'>
                    <div className='basis-[20%] flex flex-col justify-center'>
                        <div className='flex items-center justify-center w-full h-[250px] bg-[#000637]'>
                            <img src={group6}/>
                        </div>
                        <div className='mt-5'>
                            <h2 className='font-bold'>Online Marketing</h2>
                            <p>Seo Marketing</p>
                        </div>
                    </div>
                    <div className='basis-[20%] flex flex-col justify-center'>
                        <div className='flex items-center justify-center w-full h-[250px] bg-[#FFAD00]'>
                            <img src={group7}/>
                        </div>
                        <div className='mt-5'>
                            <h2 className='font-bold'>Web Development</h2>
                            <p>Developing, Designing</p>
                        </div>
                    </div>
                    <div className='basis-[20%] flex flex-col justify-center'>
                        <div className='flex items-center justify-center w-full h-[250px] bg-[#BBBBF2]'>
                            <img src={group8}/>
                        </div>
                        <div className='mt-5'>
                            <h2 className='font-bold'>Web Designing</h2>
                            <p>Designing, Developing</p>
                        </div>
                    </div>
                    <div className='basis-[20%] flex flex-col justify-center'>
                        <div className='flex items-center justify-center w-full h-[250px] bg-[#5ED6B3]'>
                            <img src={group9}/>
                        </div>
                        <div className='mt-5'>
                            <h2 className='font-bold'>Software Development</h2>
                            <p>Developing, Designing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


                 {/*Customer review*/}
        <div className='flex justify-center mt-8'>
            <div className='flex flex-col mt-[3rem] w-[70%]'>
                <div className='text-center'>
                    <h2 className='text-[2rem] font-medium'>What our customers have to say</h2>
                    <p>Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-between text-center gap-10 mt-[5rem]'>
                    <div className='flex justify-center w-full bg-[#F3F7FB]'>
                        <div className='w-[70%] flex flex-col items-center py-[3rem]'>
                            <img src={faceOne} className='rounded-full' width="20%"/>
                            <p className='py-[1rem]'>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                            <h5 className='font-bold text-[1.2rem]'>Cody Lambert</h5>
                            <p>Marketing Manager</p>
                        </div>
                    </div>
                    <div className='flex justify-center w-full bg-[#F3F7FB]'>
                        <div className='w-[70%] flex flex-col items-center py-[3rem]'>
                            <img src={faceTwo} className='rounded-full' width="20%"/>
                                <p className='py-[1rem]'>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                                </p>
                                <h5 className='font-bold text-[1.2rem]'>Cody Lambert</h5>
                                <p>Marketing Manager</p>
                        </div>
                    </div>
                    <div className='flex justify-center w-full bg-[#F3F7FB]'>
                        <div className='w-[70%] flex flex-col items-center py-[3rem]'>
                            <img src={faceThree} className='rounded-full' width="20%"/>
                            <p className='py-[1rem]'>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                            </p>
                            <h5 className='font-bold text-[1.2rem]'>Cody Lambert</h5>
                            <p>Marketing Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



                  {/*Contact us*/}
            <div className='flex justify-center mt-8' >
                <div className='flex flex-col mt-[3rem] w-[70%]' style={{backgroundImage: `url(${contactbg})`}}>
                    <div className='text-center my-[6rem]'>
                        <h2 className='text-[2rem] font-medium'>Do you have any projects? <br/>Contact us</h2>
                        <button className='border-2 border-[red] rounded-3xl text-[red] py-2 px-5 mt-5'> Contact us</button>
                    </div>
                </div>
             </div>


        {/* Footer */}

        <Footer/>
        
    </>
  )
}

export default Home