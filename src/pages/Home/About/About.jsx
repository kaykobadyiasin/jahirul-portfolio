import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import about from '../../../assets/About/about.png'
import ignite from '../../../assets/About/ignite.png'
import matribhumi from '../../../assets/About/matribhumi.png'
import doted from '../../../assets/Footer/doted.png'

const aboutMe = [
    { about: 'Explore Career' },
    
    { about: 'development sector'},
    { about: 'Corporate sector'},
    { about: 'Find Resume Tips'},
    { about: 'Interview Tricks'},
    { about: 'Aviation And Development'},
    { about: 'soft and technical skills'},
]

const About = () => {
    return (
        <div id='about' className="bg-secondaryColor-100 py-20">
            <div className="flex flex-col justify-center items-center gap-5">
                <SectionTitle title={'Who Am I?'} des={''} />
            </div>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col gap-10 lg:mx-0 mx-5'>
                    <div className='2xl:w-[70%] lg:w-full'>
                        <div className='relative'>
                            <img src={about} className='w-full relative z-10' alt="" />
                            <div>
                                <img src={doted} className='absolute -left-16 -top-10 z-0' alt="" />
                            </div>
                        </div>
                        <div className='flex justify-around items-end mt-5'>
                            <img src={ignite} alt="" />
                            <img src={matribhumi} alt="" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <h4 className='text-primaryColor-100 font-semibold text-xl mb-5'>About Me</h4>
                        <p className='text-primaryColor-300 text-justify leading-relaxed'>
                            Muhammad Jahirul Islam, Founder & Chairman of Ignite Global Foundation and Director of Matribhumi Group, holds an undergrad degree in Aeronautical Engineering from United College of Aviation and a post-graduation in Aerospace Engineering from Carden University, USA. He leads his own business ventures alongside charitable endeavors and serves as a lecturer at United College of Aviation Science and Management. Author of 'Aviation Career,' published at 'Ekushe Boi Mela-2022' by Addomo publication, Jahirul aspires to eliminate hunger and provide quality education to underprivileged children in Bangladesh.
                            <br /><br />

                            Are you seeking guidance on essential soft and technical skills for students? Interested in navigating a career in aviation or development? Look no further. This channel offers insights into these areas, featuring TV interviews, motivational content, and resources on resume building, interview strategies, and skill development. Explore videos addressing inclusive education for Bangladeshi children. Join us in fostering positivity—subscribe and stay updated.
                        </p>
                        <div className='flex flex-wrap gap-5 xl:mt-20 mt-10'>
                            {aboutMe?.map((item, index) => (
                                <span key={index} className='bg-primaryColor-400 text-primaryColor-100 font-semibold px-5 py-3 rounded-md capitalize'>{item?.about}</span>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;