import { Icon } from "@iconify/react";
import React, { Suspense } from "react";
const SectionTitle = React.lazy(() => import("../../../Components/SectionTitle/SectionTitle"));

const achievements = [
    {
        id: 1,
        icon: 'fa6-solid:graduation-cap',
        title: 'Appreciation for Unswerving Contribution',
        details: 'This award I received from the Canadian University of Bangladesh and they give this award for my outstanding contribution in inclusive education for the child.',
    },
    {
        id: 2,
        icon: 'ion:man',
        title: 'The Hero Award',
        details: 'After the next couple of years in 2021 when the whole world had battled against the Coronavirus, I tried to help the community needy people in that pandemic time.',
    },
    {
        id: 3,
        icon: 'fa-solid:award',
        title: 'The Diana Award',
        details: 'This award I received from the Canadian University of Bangladesh and they give this award for my outstanding contribution in inclusive education for the child.',
    },
    {
        id: 4,
        icon: 'fa-solid:hand-point-up',
        title: 'Joy Bangla Youth Award',
        details: 'This award I received from Young Bangla and they give this award for my outstanding contribution to inclusive education for the child who is living below the poverty line.',
    },
    {
        id: 5,
        icon: 'ph:student-fill',
        title: 'Student to Start-Up Chapter',
        details: 'After the next couple of years in 2021 when the whole world had battled against the Coronavirus, I tried to help the community needy people in that pandemic time.',
    },
    {
        id: 6,
        icon: 'material-symbols-light:volunteer-activism-rounded',
        title: 'UN Best Volunteer Group Award',
        details: 'I and my whole team of Ignite Global Foundation have been recognized by United Nations Bangladesh and got the prestigious award named "UN Best Volunteer Group Award-2019" for the contribution to youth development.',
    },
    {
        id: 7,
        icon: 'mdi:trophy-award',
        title: 'President Scout Award',
        details: 'At first, I recall my very first award named "President Scout Award-2013" which is recognized by President Abdul Hamid for excellent performance as a PS.',
    },
]

const MyAchievements = () => {
    return (
        <div id="achievement" className="bg-primaryColor-300 py-32">
            <div className="flex flex-col justify-center text-center items-center gap-5 xl:mx-0 mx-5">
                <Suspense fallback={'loading...'}>
                    <SectionTitle
                        title={'My'}
                        titleC={'Achievements'}
                        des={'Throughout my entire life I have been recognized by different organization for my relentless contribution to different sectors of our community.'}
                    />
                </Suspense>
            </div>
            <div className="xl:mx-0 mx-5">
                <div className="container mx-auto grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 justify-items-center gap-5 mt-10">
                    {achievements?.map((item, index) => (
                        <div key={index} className={`p-10 ${index % 2 === 0 ? 'bg-primaryColor-300' : 'bg-primaryColor-400'} justify-self-center border border-secondaryColor-400 rounded-md`}>
                            <Icon icon={item?.icon} className="text-primaryColor-200 text-4xl mb-10" />
                            <h3 className="text-secondaryColor-200 text-xl font-semibold mb-5">{item?.title}</h3>
                            <p className="text-secondaryColor-300">
                                {item?.details}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyAchievements;
