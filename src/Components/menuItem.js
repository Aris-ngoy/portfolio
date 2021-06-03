import React from 'react';
import { Link } from 'react-router-dom'

const MenuItem = ({ item, index, currentIndex, setcurrentIndex }) =>{
    const { Icon, name, path } = item
    return(<Link className={`mx-auto ${index === currentIndex ? "bg-white" : "bg-indigo-800" } flex flex-col justify-center items-center p-4`} 
        onClick={()=> setcurrentIndex(index)} to={path}>
        { <Icon size={19} className={`${index === currentIndex ? "text-indigo-800" : "text-white" }`} /> }
        <div className={`font-mono text-sm ${index === currentIndex ? "text-indigo-800" : "text-white" }  m-0.5`}>{name}</div>
    </Link>)
}

export default MenuItem;