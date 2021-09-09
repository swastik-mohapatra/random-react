import React from 'react'
import Information from './information'

const MainArea = () => {
    return (
        <>

         {Information.map((data,i)=>{
        return<>
        <div className="grid grid-cols-3 gap-4">

           <div className="p-10"> 
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={data.img} alt={data.name}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.name}</div>
                
                </div>
                
                </div>
            </div>
        </div>
        </>
    })}
                
                
            
     </>
    )
}

export default MainArea
