import React from 'react'

const RecentWorkComponent = (props) =>{

    const { cssClass } = props

    return(<div className={[ "container mx-auto mb-12", cssClass ].join(' ')}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-80 bg-blue-500">1</div>
        <div className="w-full h-80 bg-blue-500">1</div>
        <div className="w-full h-80 bg-blue-500">1</div>
        <div className="w-full h-80 bg-blue-500">1</div>
    </div>
</div>)
}
export default RecentWorkComponent;

