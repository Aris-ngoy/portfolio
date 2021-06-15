import React, { useState } from 'react';
import Logo from './Logo';
import MenuItem from './menuItem';
import { FiHome, FiGrid, FiUser } from "react-icons/fi";

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

    return(<div className="flex-initial fixed w-20 md:w-24 pt-8 h-screen bg-indigo-800">
        <Logo />
        <div className="pt-6">
            {
                menuList.map((item, index)=>
                    <MenuItem key={index} 
                        index={index}
                        item={item} 
                        currentIndex={currentIndex} 
                        setcurrentIndex={setcurrentIndex}  />
                )
            }
            
        </div>
    </div>)
}

export default Menu;