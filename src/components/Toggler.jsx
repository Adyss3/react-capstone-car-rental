import React from 'react'
import { FaBars } from "react-icons/fa"
import { RiSearchLine } from "react-icons/ri"
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa"
import { FaBell } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import Filter from './Filter'




const color = {
    color: "#596780"
}

const Toggler = () => {
    return (
        <div className='d-lg-none'>
            <button className="btn btn-primary py-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <FaBars size="25px" />
            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title text-primary fw-bolder" id="offcanvasExampleLabel">MORENT</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='border border-1 border-secondary rounded-pill py-1 text-center w-100 align-content-center d-flex '>
                        <button className='align-content-center border-0 bg-white'><RiSearchLine size="25px" style={color} /></button>
                        <input type="text" className='form-control border-0 py-1 pe-5' placeholder='Search something here' />
                        <Filter style={color} />
                    </div>

                    <div className="nav-items d-block  justify-content-between py-5">

                        <div className="nav-link align-content-center py-4">
                            <Link className='border border-1 rounded-circle p-3 ms-3   '>
                                <FaHeart color="grey" size="25px" />
                            </Link>
                            <span className='fw-bold fs-4 text-black px-2 align-content-center'>FAVOURITE</span>
                        </div>

                        <div className="nav-link align-content-center py-4">
                            <Link className='border border-1 rounded-circle p-3 ms-3 text-decoration-none  '>
                                <FaBell color="grey" size="25px" />
                            </Link>
                            <span className='fw-bold fs-4 text-black px-2 align-content-center'>NOTIFICATIONS</span>
                        </div>

                        <div className="nav-link align-content-center py-4">
                            <Link className='border border-1 rounded-circle p-3 ms-3 text-decoration-none  '>
                                <FaGear color="grey" size="25px" />
                            </Link>
                            <span className='fw-bold fs-4 text-black px-2'>SETTINGS</span>
                        </div>
                        <div className='nav-link align-content-center py-4'>
                            <Link className=' px-2 pt-1 pb-2 ms-3  text-decoration-none'>
                                <img src={"/assets/Profil.png"} alt="" />
                                <span className='fw-bold fs-4 text-black px-2'>PROFILE</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Toggler
