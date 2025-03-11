import React from 'react';
import Link from 'next/link';
import {
    DownloadIcon,
    GithubIcon,
    LinkedinIcon,
    YoutubeIcon
} from 'lucide-react';

const Footer = () => {
    // here I have apply bg color and some hover effects
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="w-full max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left">
                    {/********************  Social Media Links ******************/}
                    <div className="flex justify-center md:justify-start space-x-5 mb-6 md:mb-0">
                        <Link href="https://github.com/Isfhan" className="hover:scale-110 transition-transform">
                            <GithubIcon width={35} height={35} className='text-white hover:text-gray-400' />
                        </Link>
                        <Link href="https://pk.linkedin.com/in/isfhan" className="hover:scale-110 transition-transform">
                            <LinkedinIcon width={35} height={35} className='text-blue-500 hover:text-blue-400' />
                        </Link>
                        <Link href="https://www.youtube.com/@IsfhanAhmed" className="hover:scale-110 transition-transform">
                            <YoutubeIcon width={35} height={35} className='text-red-500 hover:text-red-400' />
                        </Link>
                    </div>

                    {/****************** Footer Navigation ******************/}
                    <ul className="flex flex-col md:flex-row md:space-x-6 text-sm font-medium">
                        <li>
                            <Link href="/about" className="hover:text-lime-400 transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/Isfhan-Resume-2023.pdf" target="_blank" className="flex items-center gap-2 hover:text-lime-400 transition-colors">
                                Resume <DownloadIcon className="h-4 w-4" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 border-gray-700" />
                
                {/****************** Copyright  ******************/}
                <p className="text-center text-sm text-gray-400">© 2023 Isfhan Ahmed™. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
