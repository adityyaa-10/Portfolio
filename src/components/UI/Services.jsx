import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
const Services = () => {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What do I help</h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                        I am currently learning and developing skills as a full-stack MERN developer. Proficient in Git and GitHub, and actively contribute to open source projects.                    </p>
                </div>

                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                            <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'></div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos="fade-right" data-aos-duration="1200"
                                                className='bg-white p-4 shadow-xl rounded-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>Frontend Development</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                    I possess strong proficiency in React and Tailwind CSS, enabling me to develop responsive and visually appealing front-end applications efficiently.                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={frontendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos="fade-left" data-aos-duration="1200"
                                                className='bg-white p-4 shadow-xl rounded-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>Backend Development</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                    I specialize in developing the back-end using Node.js and Express.js, while leveraging MongoDB as the database of choice. This enables me to create robust and scalable back-end solutions for various applications.                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={backendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos="fade-right" data-aos-duration="1200"
                                                className='bg-white p-4 rounded-lg shadow-xl group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>Version Control </h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                    I have acquired a comprehensive understanding of Git and GitHub, allowing me to effectively utilize version control and collaboration tools for efficient project management and contribution.                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={frontendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos="fade-left" data-aos-duration="1200"
                                                className='bg-white p-4 shadow-xl rounded-lg group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                 text-xl'>API and Authentication</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white '>
                                                    I excel in establishing API connections using Fetch API and Axios, along with expertise in implementing token-based authentication and efficient session management for enhanced security and seamless user experiences.                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={backendImg} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
