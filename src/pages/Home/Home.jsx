import About from "./About/About";
import Blogs from "./Blogs/Blogs";
import Books from "./Books/Books";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import MyAchievements from "./MyAchievements/MyAchievements";



const Home = () => {
    return (
        <div className="min-h-screen bg-secondaryColor-100">
            <Hero />
            <Books />
            <About />
            <MyAchievements />
            <Features />
            <Blogs />
            <Contact />
        </div>
    );
};

export default Home;
