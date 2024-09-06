import React, { useState } from 'react'
import visa from "../assets/Visa.png"
import bitCoin from "../assets/Bitcoin.png"
import payPal from "../assets/PayPal.png"


const PaymentForm = () => {
  const [paymentInfoData, setPaymentInfoData] = useState("creditCard");


  const handlePaymentChange = (e) => {
    setPaymentInfoData(e.target.value);
  }
  return (
    <div className=" container bg-white px-3 py-3 mt-5 rounded-3">
    <div className='pb-4'>
      <span className='fs-4 fw-bolder'>Payment Method</span><br />
      <div className='text-muted fw-bold small d-flex justify-content-between'>
        <small>Please enter your payment method</small>
        <small>Step 3 of 4</small>
      </div>
    </div>
    {/* visa */}
    <div className="bg-light py-3 px-3 rounded-3">
      <form action="" >
        <div >
          <input type="radio" id='creditCard' name='paymentMethod' value="creditCard" checked={paymentInfoData === "creditCard"} onChange={handlePaymentChange} className='px-2' />
          <label htmlFor="creditCard" className='px-2 fw-bold '>
            Credit Card
            <img src={visa} alt="" className='visa-spread' />
          </label>

          {paymentInfoData === 'creditCard' && (
            <div className=" p-4">
              <div className="d-flex">
                <div className='px-2 w-100'>
                  <label htmlFor="" className="py-2 fw-bold">Card Number</label>
                  <input type="text" placeholder="Card number" required className='form-control px-4  bg-white border-0 py-2' />
                </div>
                <div className='px-2 w-100'>
                  <label htmlFor="" className="py-2 fw-bold">Expiration Date</label>
                  <input type="text" placeholder=" DD/MM/YY" required className='form-control px-4 bg-white border-0 py-2' />
                </div>
              </div>
              <div className="d-flex">
                <div className="px-2 w-100">
                  <label htmlFor="" className="py-2 fw-bold">Card Holder</label>
                  <input type="text" placeholder="Card holder" required className='form-control px-4 bg-white border-0 py-2' />
                </div>
                <div className="px-2 w-100 ">
                  <label htmlFor="" className="py-2 fw-bold">CVC</label>
                  <input type="text" placeholder="CVC" required className='form-control px-4 bg-white border-0 py-2' />
                </div>
              </div>
            </div>
          )}
        </div>

      </form>
    </div>
    {/* paypal */}
    <div>
      <div className="bg-light py-3 px-3 rounded-3 mt-4 ">
        <form action="" >
          <div className="align-content-center">

            <input
              type="radio"
              id="paypal"
              name="paymentInfoData"
              value="paypal"
              checked={paymentInfoData === 'paypal'}
              onChange={handlePaymentChange}
            />

            <label htmlFor="paypal" className='px-2 fw-bold'>
              PayPal
              <img src={payPal} alt="" className='paypal-spread' />
            </label>

            <div className=''>

            </div>

          </div>



        </form>
      </div>
    </div>
    {/* bitcoin */}
    <div>
      <div className="bg-light py-3 px-3 rounded-3 my-4">
        <form action="" >

          <div className="">
            <input
              type="radio"
              id="bitcoin"
              name="paymentInfoData"
              value="bitcoin"
              checked={paymentInfoData === 'bitcoin'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="bitcoin" className='px-2 fw-bold'>
              Bitcoin
              <img src={bitCoin} alt="" className='bitcoin-spread' />
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default PaymentForm
