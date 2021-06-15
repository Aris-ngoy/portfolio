import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import developerImage from '../assets/developer.svg'

const HeaderComponents = () =>{
    return(<div className="flex flex-col md:flex-row m-4 lg:justify-between xl:justify-center">
    <div className="text-gray-500 mx-8 my-12">
        <h1 className="w-60 h-24 xl:w-80 xl:h-auto text-5xl xl:text-7xl font-bold">Hello, I'm Aristote</h1>
        <p className="font-mono xl:text-base text-sm my-4 w-80 xl:w-96 h-auto">
            A bright, talented, ambitious and self-motivated software developer with a 
            strong technical background who possesses self-discipline and the ability 
            to work with the minimum of supervision. Able to play a key role 
            throughout mobile and web app development to ensure maximum accessibility, 
            customer experience and usability.
        </p>
        <div className="flex flex-row">
            <span className="hover:animate-spin-slow cursor-pointer w-10 h-10 flex items-center justify-center rounded-full text-white p-2 bg-indigo-800" >
                <FiTwitter size={20} />
            </span>
            <span className="hover:animate-spin-slow cursor-pointer w-10 h-10 flex items-center justify-center rounded-full text-white p-2 bg-indigo-800 mx-2" >
                <FiGithub size={20} />
            </span>
            <span className="hover:animate-spin-slow cursor-pointer w-10 h-10 flex items-center justify-center rounded-full text-white p-2 bg-indigo-800" >
                <FiLinkedin size={20} />
            </span>
        </div>
        <button className="shadow-lg bg-indigo-800 w-32 p-2 rounded-full px-4 mt-4 focus:ring-offset-2 text-white focus:outline-none focus:ring">
            Resume
        </button>
    </div>
    <img className="md:w-6/12 p-8 md:p-2 w-full" src={developerImage} alt="svg-i" />
</div>)
}
export default HeaderComponents