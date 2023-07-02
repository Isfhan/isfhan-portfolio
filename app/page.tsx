import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';




const Home = () => {
    return (

        <div className="container max-w-7xl mt-10">

            <Hero />
            <Work />
            <Education />
            <Skills />
            <Certifications />

        </div>
    )
}

export default Home;
