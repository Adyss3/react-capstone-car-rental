import React, { useState } from 'react'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';



const Cart = ({ cartData }) => {
    const [promoCode, setPromoCode] = useState("")

    const handlePromoCode = (e) => {
        setPromoCode(e.target.value)
    }

    return (
        <div className="shadow bg-white rounded-3 py-3 px-4">
            <div>
                <span className='fw-bolder'>Rental Summary</span><br />
                <small className='small text-muted'>Prices may change depending on the length of the rental and the price of your rental car.</small>
            </div>
            <div className="py-4 d-flex gap-3">
                <div className='shadow rounded-3 bg-primary text-center py-4 px-2 w-25 h-25  align-content-center'>
                    <img src={cartData.carImg} alt="" className='w-100 px-1 ' />
                </div>
                <div className='align-content-center'>
                    <span className='fw-bolder fs-3'>{cartData.name}</span><br />
                    <div className=''>
                        <TiStarFullOutline size="20px" color='yellow' />
                        <TiStarFullOutline size="20px" color='yellow' />
                        <TiStarFullOutline size="20px" color='yellow' />
                        <TiStarFullOutline size="20px" color='yellow' />
                        <TiStarOutline size="20px" color='grey' />
                        <small className=' text-muted '>440+ Reviewer</small>
                    </div>
                </div>
            </div>
            <div>
                <hr className='border-3 border-light-subtle' />
                <div className="d-flex justify-content-between">
                    <p>Subtotal</p>
                    <p>${Number(cartData.price).toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Tax</p>
                    <p>$0</p>
                </div>
            </div>

            <div className='bg-light py-2 rounded-3 px-3'>
                <input type="text" value={promoCode} onChange={handlePromoCode} className='border-0 bg-light w-75 promo' placeholder='Apply Promo Code' />
                <button className='border-0 bg-light small'>Apply Now</button>
            </div>
            <div className="py-2">
                <div className="d-flex justify-content-between">
                    <div>
                        <span className='fw-bolder'>Total Rental Price</span><br />
                        <span className='small'>Overall price and includes rental discount</span>
                    </div>
                    <div className='align-content-center'>
                        <p className='fs-3 fw-bolder'>${Number(cartData.price).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart
