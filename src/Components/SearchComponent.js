import React from 'react'

const frameworks = ["All","React Native","Flutter","Swiftui","Jetpack Compose"]

const SearchComponent = () =>{


    return(
    <div className="flex flex-col h-auto">
        <input placeholder="Search" className="font-mono h-10 m-2 bg-gray-200 ring-2 focus:outline-none focus:ring-2 focus:border-indigo-800 p-2 px-4 rounded-full focus:bg-gray-200 focus:ring-offset-4" />
        <div className="flex flex-row flex-wrap md:flex-nowrap m-1">
            {
                frameworks.map((item, index)=>
                    <button key={index} className="font-mono text-xs w-full m-1 h-10 md:h-auto lg:h-10 border-indigo-800 border-2 text-indigo-900  focus:bg-indigo-900 focus:text-white px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-4">
                        {item}
                    </button>
                )
            }
        </div>
    </div>)
}

export default SearchComponent;