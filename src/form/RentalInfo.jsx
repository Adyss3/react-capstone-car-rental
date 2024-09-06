import React from 'react'
import mark from "../assets/mark.png"

const RentalInfo = () => {
    return (
        <div className="bg-white px-3 py-3 mt-5 rounded-3">
            <div>
                <span className='fs-4 fw-bolder'>Rental Info</span><br />
                <div className='text-muted fw-bold small d-flex justify-content-between'>
                    <small>Please enter your Rental date</small>
                    <small>Step  of 4</small>
                </div>
            </div>
            <div className=""><img src={mark} alt="" className='pe-2 py-3' />Pick Up</div>
            <div className="">
                <div className="row py-3">
                    <div className="col-md-6 ">
                        <div className='py-3'>Location</div>
                        <select name="" id="" className='form-control form-select bg-light border-0 py-3 px-3 text-secondary small' required>
                            <option disabled>Select your city</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                            <option value="houston">Houston</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="philadelphia">Philadelphia</option>
                            <option value="san-antonio">San Antonio</option>
                            <option value="san-diego">San Diego</option>
                            <option value="dallas">Dallas</option>

                        </select>

                    </div>
                    <div className="col-md-6">
                        <div className='py-3'>Date</div>
                        <select name="" id="" className='form-control form-select bg-light border-0 py-3 px-3 text-secondary small' required>
                            <option disabled>Select your date</option>
                            <option value="2024-01-01">January 1, 2024</option>
                            <option value="2024-01-02">January 2, 2024</option>
                            <option value="2024-01-03">January 3, 2024</option>
                            <option value="2024-01-04">January 4, 2024</option>

                        </select>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-6">
                        <div className='py-3'>Time</div>
                        <select name="" id="" className='form-control form-select bg-light border-0 py-3 px-3 text-secondary small' required>
                            <option disabled>Select your time</option>
                            <option value="08:00">08:00 AM</option>
                            <option value="09:00">09:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">01:00 PM</option>
                            <option value="14:00">02:00 PM</option>
                            <option value="15:00">03:00 PM</option>
                            <option value="16:00">04:00 PM</option>
                            <option value="17:00">05:00 PM</option>
                        </select>
                    </div>
                </div>


            </div>
            <div className=""><img src={mark} alt="" className='pe-2 py-3' />Drop Off</div>
            <div className="">
                <div className="row py-3">
                    <div className="col-md-6 ">
                        <div className='py-3'>Location</div>
                        <select name="" id="" className='form-control form-select bg-light border-0 py-3 px-3 text-secondary small' required>
                            <option disabled>Select your city</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                            <option value="houston">Houston</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="philadelphia">Philadelphia</option>
                            <option value="san-antonio">San Antonio</option>
                            <option value="san-diego">San Diego</option>
                            <option value="dallas">Dallas</option>

                        </select>

                    </div>
                    <div className="col-md-6">
                        <div className='py-3'>Date</div>
                        <select name="" id="" className='form-control form-select bg-light border-0 py-3 px-3 text-secondary small' required>
                            <option disabled>Select your date</option>
                            <option value="2024-01-01">January 1, 2024</option>
                            <option value="2024-01-02">January 2, 2024</option>
                            <option value="2024-01-03">January 3, 2024</option>
                            <option value="2024-01-04">January 4, 2024</option>

                        </select>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-6">
                        <div className='py-3'>Time</div>
                        <select name="" id="" className='form-control form-select bg-light border-0 py-3 px-3 text-secondary small' required>
                            <option disabled>Select your time</option>
                            <option value="08:00">08:00 AM</option>
                            <option value="09:00">09:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">01:00 PM</option>
                            <option value="14:00">02:00 PM</option>
                            <option value="15:00">03:00 PM</option>
                            <option value="16:00">04:00 PM</option>
                            <option value="17:00">05:00 PM</option>
                        </select>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default RentalInfo
