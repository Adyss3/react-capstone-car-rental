import React from 'react'
import mark from "../assets/mark.png"


const PickUp = ({ locationType }) => {
    return (
        <div className='px-3'>

            <div className=""><img src={mark} alt="" className='pe-2' />{locationType}</div>
            <div className="d-flex justify-content-between ">
                <div>
                    <label htmlFor="" className='fw-bolder fs-6'>Location</label>
                    <select name="" id="" className='form-control form-select small border-0 text-secondary pe-5 py-2'>
                        <option value="" className='' >Select your city</option>
                    </select>
                </div>
                <div className='px-2 border-2 border-light border-start border-end'>
                    <label htmlFor="" className='fw-bolder fs-6'>Date</label>
                    <select name="" id="" className='form-control form-select small border-0 text-secondary pe-5 py-2'>
                        <option value="" className='' >Select your date</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="" className='fw-bolder fs-6'>Time</label>
                    <select name="" id="" className='form-control form-select small border-0 text-secondary pe-5 py-2'>
                        <option value="" className='' >Select your time</option>
                    </select>
                </div>



                {/* <div className=''>
                    <small className='fw-bold small'>Locations</small><br />
                    <span className="  border-0 bg-white " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <small className='text-muted  d-none d-lg-inline-flex small'>Select your city <img src={DownArrow} className='arrow ps-1' alt="" /></small>
                        <small className='text-muted pe-2 d-lg-none d-inline-flex small'>Select city <img src={DownArrow} className='arrow ps-1' alt="" /></small>
                    </span>
                </div>
                <div className='border-start border-end ps-1 pe-2 '>
                    <div className="px-3">
                        <small className='fw-bold small'>Date</small><br />
                        <span className="  border-0 bg-white " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <small className='text-muted  d-none d-lg-inline-flex small'>Select your date <img src={DownArrow} className='arrow ps-1' alt="" /></small>
                            <small className='text-muted pe-2 d-lg-none d-inline-flex small'>Select date <img src={DownArrow} className='arrow ps-1' alt="" /></small>
                        </span>
                    </div>
                </div>
                <div className=''>
                    <small className='fw-bold small '>Time</small><br />

                    <span className="  border-0 bg-white  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <small className='text-muted  d-none d-lg-inline-flex small'>Select your time <img src={DownArrow} className='arrow ps-1' alt="" /></small>
                        <small className='text-muted pe-2 d-lg-none d-inline-flex small'>Select time <img src={DownArrow} className='arrow ps-1' alt="" /></small>
                    </span>
                </div> */}
            </div>














            {/* <div className="col-4">
                <div className="row">
                    <div className="col-12">Location</div>
                    <div className="col-12">
                        <span className=" dropdown-toggle border-0 bg-white " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <small className=' text-muted '>Select your city</small>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row border-start border-end ">
                    <div className="col-12">Data</div>
                    <div className="col-12">
                    <span className=" dropdown-toggle border-0 bg-white " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <small className=' text-muted '>Select your date</small>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12">Time</div>
                    <div className="col-12">
                    <span className=" dropdown-toggle border-0 bg-white " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <small className=' text-muted '>Select your time</small>
                        </span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default PickUp
