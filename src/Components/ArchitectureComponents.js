import React from 'react';
import ArchitectureIcon from '../assets/programming.svg'

const ArchitectureComponents = () =>{
    return(<div className="flex flex-col md:flex-row m-4 justify-center">
    <div className="text-gray-500 mx-8 my-8">
        <h1 className="w-60 text-2xl font-bold">Information Architecture</h1>
        <p className="font-mono xl:text-base text-sm my-4 w-80 h-auto">
            It’s about organizing the content and flow of a 
            website based on research and planning. Eventually 
            I come up with a structure/design that balances 
            the users’ desires with the business’s needs.
        </p>
    </div>
    <img className="w-96 md:w-96 p-8 md:p-2" src={ArchitectureIcon} alt="svg-i" />
</div>)
}
export default ArchitectureComponents