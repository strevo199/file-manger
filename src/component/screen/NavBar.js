import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import '../Allcss/navbar.css'

const NavBar = (props) => {
    const currentlink = props.location.pathname
    const navLinks  = currentlink.split('/').slice(1)
    
    const gotoNavLink =() =>{
        console.log('Yes');
    }

    return (
        <div className="flex navbar flex-col">
            <div className="flex flex-1 navbar_1">
                <Link className="flex-1 flex" to ="/">
                    <div  className ="flex-1 flex-col items-center flex justify-center">
                        <h1 className = {currentlink==='/' ? "text-blue-500 sm:text-xl":"text-gray-600 sm:text-xl"} >Categories</h1>
                        {/* <h1 {currentlink ==='/' ?className ="text-blue-400 sm:text-xl" :className =" sm:text-xl"} >Categories</h1> */}
                        <div className ={currentlink === "/" ? "h-1 w-1 rounded-lg bg-blue-500":"hidden"}></div>
                    </div>
                </Link>
                <Link className="flex-1 flex" to ="/home">
                    <div className ="flex-1 flex flex-col items-center justify-center">
                        <h1 className = {currentlink==='/home' ? "text-blue-500 sm:text-xl":" text-gray-600 sm:text-xl"} >All files</h1>
                        <div className ={currentlink === "/home" ? "h-1 w-1 rounded-lg bg-blue-500":"hidden"}></div>
                    </div>
                </Link>
            </div>
            <div className={currentlink === '/'? "hidden" :"homenav flex border-b-2 border-gray-400"}>
                   <ul className=" w-11/12 h-full mx-auto  text-gray-600   items-center gap-3 flex">
                       {navLinks.map(link => {
                           return(
                       <li onClick ={gotoNavLink} className="capitalize items-center flex">
                           <Link className="flex flex-1 ">{link}</Link>
                           <i className="fa fa-chevron-right flex text-2xl text-gray-400 justify-center items-center flex-1" aria-hidden="true"></i>
                       </li>
                           )
                       })}
                   </ul>
            </div>
        </div>
    )
}

export default withRouter(NavBar)
