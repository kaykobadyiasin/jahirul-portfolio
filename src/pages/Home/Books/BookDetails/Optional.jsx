import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Icon } from '@iconify/react';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Optional = () => {


    let [categories] = useState({
        Desciption: [
            {
                _id: 1,
                details: 'আমাদের তরুণ প্রজন্ম কিংবা বায়োজ্যেষ্ঠর মাঝে একটা বড় অংশ উড়োজাহাজ কিংবা এভিয়েশন ইন্ডাস্ট্রি নিয়ে তেমন সঠিক কোন ধরনা নেই কিন্তু আছে জানার অতি আগ্রহ, প্রবল ইচ্ছা এবং কৌতুহল। এভিয়েশন সম্পর্কে সঠিক গাইডলাইন আর শত অজানা তথ্য দিবে এভিয়েশন ক্যারিয়ার বইটি। যার ফলে এভিয়েশনের প্রতি তৈরি হবে আগ্রহ, উদ্দীপনা এবং জানার প্রবল ইচ্ছে। '
            }
        ],
        Author: [
            {
                _id: 1,
                name: singlebook?.name,
                commentCount: 9,
                date: '2d ago',
            }
        ]

    })

    return (
        <div>
            <Tab.Group>
                <Tab.List className="flex space-x-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    ' py-2.5 px-2.5 text-sm font-medium leading-5',
                                    ' focus:outline-none hover:bg-[#F4FBFF] text-primaryColor-200 duration-200',
                                    selected
                                        ? 'bg-[#F4FBFF] text-primaryColor-200 border-opacity-20 border-b-0 border border-primaryColor-200 rounded-t'
                                        : 'text-blue-100 hover:bg-white/[0.12] shadow border border-transparent'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <hr />
                <Tab.Panels className="mt-2 rounded-md">

                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white',
                                ''
                            )}
                        >

                            <ul className='flex flex-col gap-5'>
                                {posts.map((post) => (
                                    <li
                                        key={post?._id}
                                        className="relative rounded-md p-3 bg-gray-100"
                                    >
                                        <p className="text-sm font-medium leading-relaxed">
                                            {post?.details}
                                        </p>
                                        {(post.email) ?
                                            <div className='flex items-center gap-2'>
                                                <div >
                                                    <Icon icon="solar:user-circle-bold" className='text-2xl' />
                                                </div>
                                                <h3 className="text-sm font-semibold leading-5">
                                                    {post?.email}
                                                </h3>
                                            </div>
                                            : ''}
                                        <p className="text-sm font-medium leading-relaxed mt-3">
                                            {post?.comment}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>




            {/* <h3 className='bg-[#F4FBFF] py-2.5 px-2.5 text-sm font-medium leading-5 inline-block rounded-t shadow border border-primaryColor-200 border-opacity-20 border-b-0 text-primaryColor-200'>Description</h3>
                        <hr /> */}



        </div>
    );
};

export default Optional;