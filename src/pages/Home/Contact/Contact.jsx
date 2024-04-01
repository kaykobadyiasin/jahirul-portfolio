import jahirul from '../../../assets/Footer/Jhir.jpeg'
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
        <div id='contact' className="bg-primaryColor-300 py-32">
            <div className="container mx-auto">
                <div className='flex lg:flex-row flex-col items-center gap-10 xl:mx-0 mx-5'>
                    <div className='relative bg-primaryColor-600 border-primaryColor-200 xl:w-[60%] w-full'>
                        <div>
                            <img src={jahirul} className='rounded-md' alt="" />
                        </div>
                        <div className=''>
                            <img src={border} className='absolute top-0 right-0 ' alt="" />
                        </div>
                        <div className=''>
                            <img src={doted} className='absolute top-24 -left-7  opacity-50' alt="" />
                        </div>
                        <div className=''>
                            <img src={doted} className='absolute bottom-24 -right-7 opacity-50' alt="" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="max-w-md">
                            <h2 className="text-4xl uppercase font-bold text-secondaryColor-200 mb-5">
                                Get In Touch
                                <sup className="text-5xl font-bold text-primaryColor-200">.</sup>
                            </h2>
                            <p className="text-secondaryColor-300">
                                Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.
                            </p>
                        </div>
                        <div className='mt-20 space-y-4'>
                            <p className='text-secondaryColor-200 font-semibold'><span className='text-primaryColor-200'>Call Me:</span> +8801839319088</p>
                            <p className='text-secondaryColor-200 font-semibold'><span className='text-primaryColor-200'>Email:</span> jahirrayhan80@gmail.com</p>
                        </div>
                        <div className='mt-10'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-5">
                                    <div className='flex gap-5 '>
                                        <input type="name" id="name" {...register("firstName", { required: true })} className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light" placeholder="Name" required />
                                        <input type="email" id="email" {...register("email", { required: true })} className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <input type="subject" id="subject" {...register("subject", { required: true })} className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light" placeholder="Subject" required />
                                </div>
                                <div className="mb-5">
                                    <textarea type="message" id="message" {...register("message", { required: true })} className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full min-h-40 p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light" placeholder="Message" required />
                                </div>
                                <input className='rounded cursor-pointer px-7 py-3 text-primaryColor-100 font-medium hover:text-primaryColor-200 bg-primaryColor-200 hover:bg-primaryColor-200 hover:bg-opacity-5  border border-transparent hover:border-primaryColor-200 duration-200 mt-5' type="submit" value={'Send Message'} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;