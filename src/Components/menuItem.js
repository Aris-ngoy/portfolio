import React from 'react';
import { Link } from 'react-router-dom'

const MenuItem = ({ item, index, currentIndex, setcurrentIndex }) =>{
    const { Icon, name, path } = item
    const activeColor = "bg-indigo-800"
    const defaultColor = "bg-white"
    const activeTextColor = "text-white"
    const defaultTextColor = "text-gray-500"
    return(<Link className={`mx-auto ${index === currentIndex ? activeColor : defaultColor } flex flex-col justify-center items-center p-2 px-4 h-16`} 
        onClick={()=> setcurrentIndex(index)} to={path}>
        { <Icon size={19} className={`${index === currentIndex ? activeTextColor : defaultTextColor }`} /> }
        <div className={`font-mono text-sm ${index === currentIndex ? activeTextColor : defaultTextColor }  m-0.5`}>{name}</div>
    </Link>)
}

export default MenuItem;