import React, { Suspense } from "react";
import Hero from './Hero/Hero'
import Books from './Books/Books'
const About = React.lazy(() => import("./About/About"));
const MyAchievements = React.lazy(() => import("./MyAchievements/MyAchievements"));
const Features = React.lazy(() => import("./Features/Features"));
const Blogs = React.lazy(() => import("./Blogs/Blogs"));
const Contact = React.lazy(() => import("./Contact/Contact"));



const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Books />
            <Suspense fallback={'Loading...'}>
                <About />
            </Suspense>
            <Suspense fallback={'Loading...'}>
                <MyAchievements />
            </Suspense>
            <Suspense fallback={'Loading...'}>
                <Features />
            </Suspense>
            <Suspense fallback={'Loading...'}>
                <Blogs />
            </Suspense>
            <Suspense fallback={'Loading...'}>
                <Contact />
            </Suspense>
        </div>
    );
};

export default Home;
