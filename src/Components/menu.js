import React, { useState } from 'react';
import MenuItem from './menuItem';
import { FiHome, FiGrid, FiUser } from "react-icons/fi";
import Logo from '../assets/mbotetechlogo.svg'
import LogoText from '../assets/mbotetechlogoText.svg'

const menuList = [
    {
        path : "/",
        name : "Home",
        Icon : FiHome
    },
    {
        path : "/works",
        name : "Works",
        Icon : FiGrid
    },
    {
        path : "/about",
        name : "About",
        Icon : FiUser
    }
]

const Menu = () =>{

    const [currentIndex, setcurrentIndex] = useState(0)

    return(
        <nav className="bg-white-900 fixed w-full z-50 shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block h-16 w-auto" src={Logo} alt="Workflow"/>
                            <img className="block h-auto w-44 text-indigo-800" src={LogoText} alt="Workflow"/>
                        </div>
                        <div className="block">
                            <div className="flex space-x-0">
                                {
                                    menuList.map((item,index)=>{
                                        return <MenuItem key={index} index={index} item={item} currentIndex={currentIndex} setcurrentIndex={setcurrentIndex} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </nav> 
    )
}

export default Menu;