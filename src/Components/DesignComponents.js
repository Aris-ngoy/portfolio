import React from 'react';
import DesignIcon from '../assets/development.svg'

const DesignComponents = () =>{
    return(<div className="flex flex-col md:flex-row m-4 justify-center">
    <img className="w-96 md:w-96 p-8 md:p-2" src={DesignIcon} alt="svg-i" />
    <div className="text-gray-500 mx-8 my-8">
        <h1 className="w-60 text-2xl font-bold">Design & Development</h1>
        <p className="font-mono text-sm my-4 w-80 h-auto">
            As a developer, I understand the perfect user 
            interface should look good and work even better. 
            Alongside my clients, I uncover problems and solve them. 
            In short, I create bolder online experiences.
        </p>
    </div>
</div>)
}
export default DesignComponents