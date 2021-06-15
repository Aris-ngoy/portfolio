import React from 'react';
import developerImage from '../../assets/programming.svg'

const frameworks = ["React Native","Flutter","Swiftui","Jetpack Compose"]

const MainPage = () =>{
    return(<div className="flex flex-col h-screen">
        <div className="container mx-auto p-10 h-auto">
            <div className="flex flex-col lg:flex-row h-auto md:h-96 items-center">
                <div className="p-4 md:p-10">
                    <div className="text-2xl md:text-5xl">
                        Learn to develop Apps with React native, Flutter, Swiftui and Jetpack compose...
                    </div>
                    <div className="text-base my-2">We intend to make complex apps, easy to Understand</div>
                    <button className="bg-indigo-800 focus:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none px-6 py-2 text-white rounded-full">
                        Subscribe On Youtube
                    </button>
                </div>
                <img className="md:w-6/12 my-4 md:my-0 md:p-2 w-full" alt="headerimage" src={developerImage} />
            </div>
        </div>
        <div className="container mx-auto p-4 md:p-10">
            <div className="flex flex-col lg:flex-row md:p-10 h-auto">
                <input placeholder="Search" className="h-10 mb-4 md:mb-0 w-full md:w-auto bg-gray-200 ring-2  xl:w-1/2 focus:outline-none focus:ring-2 focus:border-indigo-800 p-2 px-4 rounded-full focus:bg-gray-200 focus:ring-offset-4" />
                <div className="flex flex-row flex-wrap md:flex-nowrap lg:mt-0 sm:mt-4">
                    {
                        frameworks.map((item, index)=>
                            <button key={index} className="h-10 border-indigo-800 border-2 text-indigo-900 border md:ml-0 lg:ml-4 mr-4 md:mr-4 lg:mr-0 mt-4 md:mt-0 focus:bg-indigo-900 focus:text-white px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-4">
                                {item}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    </div>)
}

export default MainPage;