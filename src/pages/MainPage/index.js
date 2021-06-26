import React from 'react';
import developerImage from '../../assets/programming.svg'
import SearchComponent from '../../Components/SearchComponent';
import RecentWorkComponent from '../../Components/RecentWorkComponents';


const MainPage = () =>{
    return(<div className="flex flex-col h-screen">
        <div className="container mx-auto p-10 h-auto">
            <div className="flex flex-col lg:flex-row h-auto md:h-96 items-center">
                <div className="p-4 md:p-10">
                    <div className="font-mono text-2xl md:text-4xl text-gray-600">
                        Learn to develop Apps with React native, Flutter, Swiftui and Jetpack compose...
                    </div>
                    <div className="font-mono text-base text-gray-500 my-2">We intend to make complex apps, easy to Understand</div>
                    <button className="bg-indigo-800 font-mono focus:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none px-6 py-2 text-white rounded-full">
                        Subscribe On Youtube
                    </button>
                </div>
                <img className="md:w-6/12 my-4 md:my-0 md:p-2 w-full" alt="headerimage" src={developerImage} />
            </div>
        </div>
        <div className="container mx-auto p-4 md:p-10">
            <SearchComponent />
            <RecentWorkComponent cssClass="m-2 mt-10" />
        </div>
    </div>)
}

export default MainPage;