import React, { Suspense } from 'react';
import about from '../../../assets/About/about.png'
import ignite from '../../../assets/About/ignite.png'
import matribhumi from '../../../assets/About/matribhumi.png'
import doted from '../../../assets/Footer/doted.png'

const SectionTitle = React.lazy(() => import("../../../Components/SectionTitle/SectionTitle"));

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
                        I'm Muhammad Jahirul Islam, an Aeronautical Engineering graduate and Director of Matribhumi Group. Alongside teaching at the United College of Aviation Science and Management, I've authored 'Aviation Career' and lead Ignite Global Foundation. My goal? Zero hunger and quality education for all in Bangladesh.

                        <br /><br />
                        Explore my channel for guidance on student life, aviation careers, and development sectors. Find tips on soft skills, resume building, and interviews. Join me in spreading positivity by subscribing and clicking the bell icon.

                        </p>
                        <div className='my-8 flex sm:flex-row flex-col sm:items-end items-start 2xl:justify-normal gap-10 xl:justify-between'>
                        <div className='flex space-x-20 items-end mt-5'>
                            <img src={ignite} alt="IGNITE GLOBAL FOUNDATION" className='' />
                            <img src={matribhumi} alt="Matribhumi Group" className='' />
                        </div>
                        <a href='https://www.youtube.com/channel/UCB_tJEyTocrkY2zfQ7dFm7w' className=' rounded px-7 py-3 text-base font-medium hover:text-primaryColor-200 bg-primaryColor-200 hover:bg-primaryColor-200 hover:bg-opacity-5  border border-transparent hover:border-primaryColor-200 duration-200 text-white lg:hover:text-secondaryColor-200 hover:text-white hover:border-primaryColor-100' target='_blank'>
                        Youtube channel
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;