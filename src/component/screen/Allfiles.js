import React from 'react'

const Allfiles = () => {
    return (
        <div className="allfiles flex flex-col text-gray-600 flex-1">
            <div className="flex flex-1 flex-col py-3 gap-y-5">
               
               <div className ="flex border-b-2  border-gray-300 items-end gap-x-4">
                    <i className="fa fa-mobile-alt flex text-3xl" aria-hidden="true"></i>
                    <div className="flex-1">
                        <h1>Internal shared storage</h1>
                        <h1 className="text-xs text-gray-400">Available 310MB</h1>
                    </div>
               </div>

               <div className ="flex border-gray-300 border-b-2 items-end gap-x-4">
                    <i className="fa fa-sd-card flex text-3xl" aria-hidden="true"></i>
                    <div className="flex-1">
                        <h1>SanDisk SD Card</h1>
                        <h1 className="text-xs text-gray-400">Available 46GB</h1>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Allfiles
