import Books from "./Books/Books";
import Hero from "./Hero/Hero";



const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Books/>
        </div>
    );
};

export default Home;
