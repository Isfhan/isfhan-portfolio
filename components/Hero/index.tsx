import Image from "next/image";

const Hero = () => {

    return (
        
        <div className="mb-40">

            <div>
                <Image
                    className="absolute -z-10 opacity-10"
                    src="/landing-bg.jpg"
                    fill
                    alt="Picture of the author"
                />
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-between lg:flex-nowrap">

                <div className="flex-shrink-0">
                    <Image
                        className="border-b-4 border-lime-400 animate__animated animate__backInLeft"
                        src="/isfhan.jpg"
                        alt="Picture of the Isfhan Ahmed"
                        width={500}
                        height={500}
                    />
                </div>

                <div className="flex justify-center flex-col p-4 animate__animated animate__backInRight">
                    <h1 className="text-white text-5xl text-center lg:text-left font-bold mb-5">
                        Hi, I'm Isfhan. Nice to meet you.
                    </h1>
                    <p className="text-white text-2xl text-center lg:text-left font-normal">
                        I am a backend heavy full-stack developer with proficiency in various programming languages, such as <span className="text-lime-400"> PHP</span>,<span className="text-lime-400">JavaScript</span>,<span className="text-lime-400">Python</span> & <span className="text-lime-400">Typescript </span> as well their related libraries and frameworks.
                    </p>

                </div>

            </div>
        </div>
    )
}



export default Hero;