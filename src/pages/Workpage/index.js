import React from 'react';
import RecentWorkComponent from '../../Components/RecentWorkComponents';
import SearchComponent from '../../Components/SearchComponent';

const Workpage = () =>{
    return(<div className="container mx-auto p-10 h-auto">
        <SearchComponent />
        <RecentWorkComponent />
    </div>)
}
export default Workpage