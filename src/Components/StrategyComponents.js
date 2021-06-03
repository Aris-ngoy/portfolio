import React from 'react';
import StrategyIcon from '../assets/strategy.svg'

const StrategyComponents = () =>{
    return(<div className="flex flex-col md:flex-row m-4 justify-center">
    <img className="w-96 md:w-96 p-8 md:p-2" src={StrategyIcon} alt="svg-i" />
    <div className="text-gray-500 mx-8 my-8">
        <h1 className="w-60 text-2xl font-bold">Strategy</h1>
        <p className="font-mono text-sm my-4 w-80 h-auto">
            There’s no style over substance here. 
            I bring together form and the function to 
            create something that looks good and 
            performs brilliantly. Simple.
        </p>
    </div>
</div>)
}
export default StrategyComponents