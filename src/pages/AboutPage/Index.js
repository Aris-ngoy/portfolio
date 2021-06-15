import React from 'react';
import ArchitectureComponents from '../../Components/ArchitectureComponents';
import DesignComponents from '../../Components/DesignComponents';
import HeaderComponents from '../../Components/HeaderComponents';
import RecentWorkComponent from '../../Components/RecentWorkComponents';
import StrategyComponents from '../../Components/StrategyComponents';


const AboutPage = () =>{
    return(<div className="flex flex-col">
        <HeaderComponents />
        <h1 className="w-full mb-20 mt-8 text-2xl text-center text-gray-500 font-bold">Things I Do</h1>
        <StrategyComponents />
        <ArchitectureComponents />
        <DesignComponents />
        <h1 className="w-full mb-20 mt-8 text-2xl text-center text-gray-500 font-bold">Recent Work</h1>
        <RecentWorkComponent />
    </div>)
}

export default AboutPage;