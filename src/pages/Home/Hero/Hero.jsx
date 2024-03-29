import Button from "../../../Components/Button/Button";
import heroBg from '../../../assets/Hero/jahirulIslam.png'


const Hero = () => {
    return (
        <div>
            <div className="min-h-[91vh] flex flex-col justify-center items-center text-center bg-black bg-opacity-95 bg-no-repeat bg-bottom bg-current bg-blend-luminosity " style={{ backgroundImage: `url(${heroBg})` }}>
                <div className=" text-white mt-5">
                    <h3 className="text-xl font-semibold tracking-wider">Welcome</h3>
                    <h1 className="text-6xl font-bold my-8">Muhammad Jahirul Islam</h1>
                    <h5>Entrepreneur | Teacher | Author</h5>
                </div>
                <div className="flex items-center justify-center gap-5 mt-14">
                    <Button btnValue={'Achievements'} link={'#achievement'} color={'text-white hover:text-primaryColor-100 hover:border-primaryColor-100'} />
                    <Button btnValue={'My Books'} link={'#books'} color={'text-white hover:text-primaryColor-100 hover:border-primaryColor-100'} />
                </div>

            </div>
        </div>
    );
};

export default Hero;