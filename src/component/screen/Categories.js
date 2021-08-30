import React from 'react'
import '../Allcss/Body.css'
import {Link} from 'react-router-dom'
const Categories = () => {
    return (
        <div className="categories flex-col flex flex-1">
            <div className="flex flex-col gap-y-6 flex-1 h-64 border-b-2 pb-3">
            <div className="flex relative searchbar pt-2">
                <input className="flex-1 h-8 outline-none rounded-3xl text-center"type="search" placeholder="Search files" />
            </div>
                <div className="flex flex-1  gap-8">
                    <div className="flex-1  flex flex-col rounded-lg bg-red-500">
                        <Link className="flex flex-1 flex-col" to ="/categories/music">
                            <i className="fa fa-music flex text-3xl sm:text-5xl text-white justify-center items-center flex-1" aria-hidden="true"></i>
                            <div className="flex text-xs justify-evenly pb-2 text-white">
                                <h1>Music</h1>
                                <h1>99+</h1>
                            </div>
                        </Link>
                    </div>
                    <div className=" flex-1 flex flex-col rounded-lg bg-indigo-400">
                        <Link className="flex flex-1 flex-col" to ="/categories/videos">
                            <i className="fa fa-video flex text-3xl sm:text-5xl text-white justify-center items-center flex-1" aria-hidden="true"></i>
                            <div className="flex text-xs justify-evenly pb-2 text-white">
                                <h1>Videos</h1>
                                <h1>45</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col rounded-lg bg-yellow-400">
                        <Link className="flex flex-1 flex-col" to ="/categories/images">
                            <i className="fa fa-image flex text-3xl sm:text-5xl text-white justify-center items-center flex-1" aria-hidden="true"></i>
                            <div className="flex text-xs justify-evenly pb-2 text-white">
                                <h1>Images</h1>
                                <h1>99+</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-1  gap-8">
                    <div className="flex-1 flex flex-col rounded-lg  bg-green-400">
                        <Link className="flex flex-1 flex-col" to ="/categories/apps">
                            <i className="fa fa-th flex text-3xl sm:text-5xl text-white justify-center items-center flex-1" aria-hidden="true"></i>
                            <div className="flex text-xs justify-evenly pb-2 text-white">
                                <h1>App</h1>
                                <h1>9</h1>
                            </div>
                        </Link>
                    </div>
                    <div className=" flex-1 flex flex-col rounded-lg bg-pink-400">
                        <Link className="flex flex-1 flex-col" to ="/categories/texts">
                            <i className="fa fa-file-alt flex text-3xl sm:text-5xl text-white justify-center items-center flex-1" aria-hidden="true"></i>
                            <div className="flex text-xs justify-evenly pb-2 text-white">
                                <h1>Text</h1>
                                <h1>30</h1>
                            </div>
                        </Link>
                    </div>
                    <div className=" flex-1 flex flex-col rounded-lg bg-blue-400">
                        <Link className="flex flex-1 flex-col" to ="/categories/bluetooth">
                            <i className="flex text-3xl sm:text-5xl text-white material-icons justify-center items-center flex-1" >bluetooth</i>
                            <div className="flex text-xs justify-evenly pb-2 text-white">
                                <h1>Bluetooth</h1>
                                <h1>44</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className="shortcut flex-col justify-evenly flex flex-1">
                <div className="flex">
                    <i className="fa fa-plus flex text-3xl text-gray-300 justify-center items-center flex-1" aria-hidden="true"></i>
                    <i className="fa fa-plus flex text-3xl text-gray-300 justify-center items-center flex-1" aria-hidden="true"></i>
                    <i className="fa fa-plus flex text-3xl text-gray-300 justify-center items-center flex-1" aria-hidden="true"></i>
                </div>
                {/* <footer></footer> */}
                <div className="flex gap-y-4 flex-col">
                    <div className="flex gap-x-2">
                        <i className="fa fa-sd-card flex text-3xl text-gray-500 justify-center items-center" aria-hidden="true"></i>
                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-1 text-xs text-gray-500  justify-between">
                                <h1>SanDisk SD Card</h1>
                                <h1>46.34GB/56.46GB</h1>
                            </div>
                            <div className="w-1/4 h-1 rounded-lg bg-purple-300"></div>
                        </div>
                    
                    </div>
                    <div className="flex gap-x-2">
                        <i className="fa fa-mobile-alt flex text-3xl text-gray-500 justify-center items-center" aria-hidden="true"></i>
                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-1 text-xs text-gray-500  justify-between">
                                <h1>Internal shared storage</h1>
                                <h1>7.14GB/8.00GB</h1>
                            </div>
                            <div className="w-3/4 h-1 bg-yellow-300"></div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="categoriesfooter">

            </div>
        </div>
    )
}

export default Categories
