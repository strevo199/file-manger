import React from 'react'
import {withRouter} from 'react-router-dom'
const Footer = (props) => {
    const currentLink = props.location.pathname
    return (
        <footer  className= {currentLink ==='/'?"hidden": "flex w-full"}>
                <i className="fa fa-search flex text-md sm:text-xl  justify-center items-center flex-1" aria-hidden="true"></i>
                <i className="fa fa-plus flex text-md sm:text-xl  justify-center items-center flex-1" aria-hidden="true"></i>
                <i className="fa fa-check-circle flex text-md sm:text-xl  justify-center items-center flex-1" aria-hidden="true"></i>
                <i className="fa fa-eye flex text-md sm:text-xl  justify-center items-center flex-1" aria-hidden="true"></i>
                <i className="fa fa-sort-amount-up flex text-md sm:text-xl  justify-center items-center flex-1" aria-hidden="true"></i>
        </footer>
    )
}

export default withRouter(Footer)
