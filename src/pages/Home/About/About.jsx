
import React, { Suspense } from 'react';
import about from '../../../assets/About/about.png'
import ignite from '../../../assets/About/ignite.png'
import matribhumi from '../../../assets/About/matribhumi.png'
import doted from '../../../assets/Footer/doted.png'
import Button from '../../../Components/Button/Button';

const SectionTitle = React.lazy(() => import("../../../Components/SectionTitle/SectionTitle"));


const aboutMe = [
    { about: 'Explore Career' },
    { about: 'development sector' },
    { about: 'Corporate sector' },
    { about: 'Find Resume Tips' },
    { about: 'Interview Tricks' },
    // { about: 'Aviation And Development' },
    // { about: 'soft and technical skills' },
]

const About = () => {
    return (
        <div id='about' className="bg-primaryColor-100 py-32">
            <div className="flex flex-col justify-center items-center gap-5">
                <Suspense fallback={'loading...'}>
                    <SectionTitle titleP={'Who'} title={'Am I?'} des={''} />
                </Suspense>
            </div>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col gap-10 lg:mx-0 mx-5'>
                    <div className='2xl:w-[70%] lg:w-full'>
                        <div className='relative'>
                            <img src={about} className='w-full relative z-10' alt="" />
                            <div>
                                <img src={doted} className='absolute -left-14 -top-8 opacity-50 z-0' alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='w-full'>
                        {/* <h4 className='text-secondaryColor-200 font-semibold text-xl mb-5'>About Me</h4> */}
                        <p className='text-secondaryColor-300 text-justify leading-relaxed'>
                        Meet Mr. IGNITE: Muhammad Jahirul Islam, founder of Ignite Global Foundation and Director at Matribhumi Group. He's an expert in Aeronautical and Aerospace Engineering, passionate about ending hunger and promoting education in Bangladesh.

                        <br /><br />
                        Unlock Life Skills: Subscribe for essential soft and technical skills. From resumes to inclusive education, join the journey for positive change.


                        </p>
                        <div className='my-8'>
                        <a href='https://www.youtube.com/channel/UCB_tJEyTocrkY2zfQ7dFm7w' className='rounded px-7 py-3 text-base font-medium hover:text-primaryColor-200 bg-primaryColor-200 hover:bg-primaryColor-200 hover:bg-opacity-5  border border-transparent hover:border-primaryColor-200 duration-200 text-white lg:hover:text-secondaryColor-200 hover:text-white hover:border-primaryColor-100' target='_blank'>
                        Youtube channel
                        </a>
                        </div>
                        <div className='flex space-x-20 items-end mt-5'>
                            <img src={ignite} alt="IGNITE GLOBAL FOUNDATION" className='' />
                            <img src={matribhumi} alt="Matribhumi Group" className='' />
                        </div>
                        {/* <div className='flex flex-wrap gap-5 xl:mt-20 mt-10'>
                            {aboutMe?.map((item, index) => (
                                <span key={index} className='bg-secondaryColor-200 text-primaryColor-100 hover:bg-primaryColor-200 duration-200 font-semibold px-5 py-3 rounded-md capitalize'>{item?.about}</span>
                            ))
                            }
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;