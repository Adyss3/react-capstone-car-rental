import React from 'react'
import { RiSearchLine } from "react-icons/ri"
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa"
import { FaBell } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import Toggler from "./Toggler"
import Filter from "./Filter"

const color = {
    color: "#596780"
}

const NavBar = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-light bg-white d-flex align-content-center justify-content-between w-100 p-2">
            <div className="nav-logo d-flex gap-5">
                <div>
                    <h3 className='text-primary fw-bolder'>MORENT</h3>
                </div>

                <div className='border border-1 border-secondary rounded-pill py-1 px-3 ms-5 d-lg-flex d-none form-control align-content-center'>
                    <button className='align-content-center border-0 bg-white'><RiSearchLine size="25px"  style={color}/></button>
                    <input type="text" className='form-control border-0 py-1 pe-5' placeholder='Search something here' />
                    <Filter style={color } />
                </div>
            </div>



            <div className="nav-items d-flex justify-content-between d-lg-flex d-none">
                <div className="nav-link align-content-center">
                    <Link className='border border-1 rounded-circle px-2 pt-1 pb-2 me-3 '>
                        <FaHeart color="grey" size="20px" />
                    </Link>
                </div>
                <div className="nav-link align-content-center">
                    <Link className='border border-1 rounded-circle px-2 pt-1 pb-2 me-3 '>
                        <FaBell color="grey" size="20px" />
                    </Link>
                </div>
                <div className="nav-link align-content-center">
                    <Link className='border border-1 rounded-circle px-2 pt-1 pb-2 me-3 '>
                        <FaGear color="grey" size="20px" />
                    </Link>
                </div>
                <div className='nav-link align-content-center'>
                    <Link className=' px-2 pt-1 pb-2 me-3 '>
                        <img src={"/assets/Profil.png"} alt="" />
                    </Link>
                </div>
            </div>
            {/* toggler  */}
            <Toggler />
        </nav>
    )
}

export default NavBar
