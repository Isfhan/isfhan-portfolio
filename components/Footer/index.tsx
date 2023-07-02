import React from 'react'
import Link from 'next/link';


import {
    DownloadIcon,
    GithubIcon,
    LinkedinIcon,
    YoutubeIcon
} from 'lucide-react';



export const Footer = () => {

    return (

        <footer className="bg-white shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">

                    <div className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap px-2 cursor-pointer">
                            <Link href={'https://github.com/Isfhan'}>
                                <GithubIcon width={35} height={35} color='#4078c0' />
                            </Link>

                        </span>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap px-2 cursor-pointer">
                            <Link href={'https://pk.linkedin.com/in/isfhan'}>
                                <LinkedinIcon width={35} height={35} color='#0A66C2' />
                            </Link>
                        </span>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap px-2 cursor-pointer">
                            <Link href={'https://www.youtube.com/@IsfhanAhmed'}>
                                <YoutubeIcon width={35} height={35} color='#c4302b' />
                            </Link>
                        </span>
                    </div>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-background sm:mb-0">
                        <li>
                            <Link href="/about" className="flex items-center gap-2 text-background transition-all duration-300 px-3 py-2 rounded-md text-base  cursor-pointer">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/resume" className="flex items-center gap-2 text-background transition-all duration-300 px-3 py-2 rounded-md text-base  cursor-pointer">
                                Resume <DownloadIcon className="h-4 w-4" />
                            </Link>
                        </li>

                    </ul>
                </div>
                <hr className="my-6 border-lime-400 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-background sm:text-center">© 2023 Isfhan Ahmed™. All Rights Reserved.</span>
            </div>
        </footer>
    );
}



export default Footer;