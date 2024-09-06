import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Billing from "../form/Billing"
import RentalInfo from '../form/RentalInfo'
import PaymentForm from "../form/PaymentForm"
import Cart from "../components/Cart"
import Secure from "../assets/secure img.png"
import Footer from "../components/Footer"



const Payment = () => {
  // const [billingData, setBillingData] = useState({
  //   name: "",
  //   phoneNumber: "",
  //   address: "",
  //   city: "",
  // });
  // const [paymentInfoData, setPaymentInfoData] = useState("creditCard");


  // const handlePaymentChange = (e) => {
  //   setPaymentInfoData(e.target.value);
  // }




  // const handleBillingData = (e) => {
  //   const { name, value } = e.target;
  //   setBillingData({ ...billingData, [name]: value })
  // }

  const submit = (e) => {
    e.preventDefault();
  }




  const [subscribe, setSubscribe] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubscribe = (e) => {
    setSubscribe(e.target.checked);
  };
  const handleAgreeTerms = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const isFormComplete = !subscribe && !agreeTerms

  return (
    <div className='bg-light'>
      <div className='caontainer-fluid'>
        <NavBar />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 py-3">
            <form action="" onSubmit={submit}>
              {/* step 1  */}
              <Billing />


              {/* step 2 */}
              <RentalInfo />


              {/* step 3 */}
              <PaymentForm />

              {/* step 4 */}
              <div className="bg-white px-3 py-3 mt-5 rounded-3">
                <div className='pb-4'>
                  <span className='fs-4 fw-bolder'>Confirmation</span><br />
                  <div className='text-muted small fw-bold d-flex justify-content-between'>
                    <small>We are getting to the end. Just few clicks and your rental is ready!</small>
                    <small>Step 4 of 4</small>
                  </div>
                </div>
                <div className="bg-light form-control border-0 my-3">
                  <input type="checkbox" className='bg-light' value={subscribe} onClick={handleSubscribe} required />
                  <label htmlFor="" className='px-3 py-2'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                </div>
                <div className="bg-light form-control border-0 py-3  my-3">
                  <input type="checkbox" value={agreeTerms} onClick={handleAgreeTerms} className='bg-light' required />
                  <label htmlFor="" className='px-3'>I agree with our terms and conditions and privacy policy.</label>
                </div>
                <button className="bg-primary rounded-2 text-white py-2 border-0 px-2 my-3" type='submit' disabled={!isFormComplete}>
                  Rent Now
                </button>
                <div className='py-3'>
                  <img src={Secure} alt="" />
                </div>
                <div>
                  <p className='fw bold'>All your data are safe</p>
                  <small className='small text-muted fw bold'>We are using the most advanced security to provide you the best experience ever.</small>
                </div>

              </div>


            </form>




          </div>

          {/* Cart */}
          <div className="col-md-4 py-3 ">
            <Cart />


          </div>
        </div>

      </div>
      <div className="container-fluid bg-white">
        <Footer/>
      </div>



    </div>
  )
}

export default Payment
