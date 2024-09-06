import React, { useState } from 'react'

const Billing = () => {
    const [billingData, setBillingData] = useState({
        name: "",
        phoneNumber: "",
        address: "",
        city: "",
    });

    const handleBillingData = (e) => {
        const { name, value } = e.target;
        setBillingData({ ...billingData, [name]: value })
    }


    return (
        <div className="bg-white p-2 rounded-3 py-4 px-3">
            <div>
                <span className='fs-4 fw-bolder'>Billing Info</span><br />
                <div className='text-muted small fw-bold d-flex justify-content-between'>
                    <small>Please enter your billing info</small>
                    <small>Step 1 of 4</small>
                </div>
            </div>


            <div className="row">
                <div className="col-6">
                    <div className='w-100 py-3'>
                        <p>Name</p>
                        <input type="text" name="name" id="name" className='form-control border-0 bg-light py-3' value={billingData.name} onChange={handleBillingData} placeholder='Your name' required />
                    </div>
                    <div className='w-100'>
                        <p>Address</p>
                        <input type="text" name="address" id="address" className='form-control border-0 bg-light py-3' value={billingData.address} onChange={handleBillingData} placeholder='Address' required />
                    </div>

                </div>
                <div className="col-6">
                    <div className='w-100 py-3'>
                        <p>Phone Number</p>
                        <input type="text" name="phoneNumber" id="phoneNumber" className='form-control border-0 bg-light py-3' value={billingData.phoneNumber} onChange={handleBillingData} placeholder='Phone number' required />
                    </div>
                    <div className='w-100'>
                        <p>Town/City </p>
                        <input type="text" name="city" id="city" className='form-control border-0 bg-light py-3' value={billingData.city} onChange={handleBillingData} placeholder='Town or city' required />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Billing
