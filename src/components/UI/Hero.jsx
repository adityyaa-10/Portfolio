/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import heroImg from '../../assets/images/adi.jpeg'
import CountUp from 'react-countup'

const Hero = () => {
    const openPdfInNewTab = () => {
        const pdfPath = '/resume.pdf';
        const fullUrl = process.env.PUBLIC_URL + pdfPath;
        const newWindow = window.open(fullUrl, '_blank');
        if (newWindow) {
            // pass
        } else {
            console.error('The new window could not be opened.');
        }
    };
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-cetner justify-between sm:flex-col md:flex-row'>
                    <div className='w-full md:basis-1/2'>
                        <h5
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className='text-headingColor font-[600] text-[16px]'
                        >
                            Hello Everyone
                        </h5>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
                        >
                            I am Aditya Pandey <br />
                            MERN Developer
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            data-aos-delay="200"
                            className='flex items-center gap-6 mt-7'
                        >

                            <button
                                onClick={openPdfInNewTab}
                                className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                            >
                                <i className="ri-mail-line"></i> Download CV
                            </button>

                            <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid
                            border-smallTextColor'
                            >
                                See Portfolio
                            </a>
                        </div>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className='flex gap-2 text-headingColor font-[500] mt-14 text-[15px] leading-7 sm:pl-14 sm:pr-10'
                        >
                            <span> <i className='ri-apps-2-line'></i></span>
                            B.Tech in Computer Science <br />@ KIET Group of Instituitions (2021-2025)
                        </p>

                        <div className='flex item-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[15px] font-[600]'>
                                Connect
                            </span>
                            <span>
                                <a href="https://github.com/adityyaa-10" className='text-smallTextColor text-[18px] font-[600]'>
                                    <i className='ri-github-fill'></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://twitter.com/adityyaa_10" className='text-smallTextColor text-[18px] font-[600]'>
                                    <i className='ri-twitter-fill'></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/in/adityyaa10/" className='text-smallTextColor text-[18px] font-[600]'>
                                    <i className='ri-linkedin-line'></i>
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt="" className='rounded-md max-h-[500px] m-auto' />
                        </figure>
                    </div>

                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                    md:flex-col md:justify-end md:text-end mx-auto w-full'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={1} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Year Of Experience</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={1000} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>GitHub Contributions</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={118} duration={2} suffix='' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Longest Commit Streak</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={4} duration={2} suffix='+' />
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Merged Request in Hacktoberfest</h4>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Hero
