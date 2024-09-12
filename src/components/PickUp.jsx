import React from 'react'


const PickUp = ({ locationType }) => {
    return (
        <div className='px-3'>

            <div className=""><img src={"/assets/mark.png"} alt="" className='pe-2' />{locationType}</div>
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
            </div>
        </div>
    )
}

export default PickUp
