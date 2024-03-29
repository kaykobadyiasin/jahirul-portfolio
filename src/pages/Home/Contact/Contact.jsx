import jahirul from '../../../assets/Hero/main.png'
import border from '../../../assets/Footer/border.png'
import doted from '../../../assets/Footer/doted.png'
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        reset()
        console.log(data)
    }


    return (
        <div id='contact' className="bg-secondaryColor-100 py-20">
            <div className="container mx-auto py-20">
                <div className='flex lg:flex-row flex-col items-center gap-10 xl:mx-0 mx-5'>
                    <div className='relative bg-primaryColor-600 border-primaryColor-200 xl:w-[60%] w-full'>
                        <div>
                            <img src={jahirul} className='grayscale' alt="" />
                        </div>
                        <div className=''>
                            <img src={border} className='absolute top-0 right-0' alt="" />
                        </div>
                        <div className=''>
                            <img src={doted} className='absolute top-5 -left-5' alt="" />
                        </div>
                        <div className=''>
                            <img src={doted} className='absolute -bottom-8 -right-5' alt="" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="max-w-md">
                            <h2 className="text-4xl uppercase font-bold text-primaryColor-100 mb-5">
                                Get In Touch
                                <sup className="text-5xl font-bold text-primaryColor-200">.</sup>
                            </h2>
                            <p className="text-primaryColor-300">
                                Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.
                            </p>
                        </div>
                        <div className='mt-20 space-y-4'>
                            <p className='text-white'><span className='text-primaryColor-200'>Call Me:</span> +8801839319088</p>
                            <p className='text-white'><span className='text-primaryColor-200'>Email:</span> jahirrayhan80@gmail.com</p>
                        </div>
                        <div className='mt-10'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-5">
                                    <div className='flex gap-5 '>
                                        <input type="name" id="name" {...register("firstName", { required: true })} className="shadow-sm bg-primaryColor-400 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-5 dark:bg-primaryColor-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required />
                                        <input type="email" id="email" {...register("email", { required: true })} className="shadow-sm bg-primaryColor-400 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-5 dark:bg-primaryColor-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <input type="subject" id="subject" {...register("subject", { required: true })} className="shadow-sm bg-primaryColor-400 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-5 dark:bg-primaryColor-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Subject" required />
                                </div>
                                <div className="mb-5">
                                    <textarea type="message" id="message" {...register("message", { required: true })} className="shadow-sm bg-primaryColor-400 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full min-h-40 px-3 py-5 dark:bg-primaryColor-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Message" required />
                                </div>
                                <input className='rounded-md px-7 py-3 text-base font-medium text-white bg-primaryColor-200 hover:bg-transparent border border-transparent hover:border-primaryColor-200 hover:text-primaryColor-100 duration-200 cursor-pointer mt-5' type="submit" value={'Send Message'} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;