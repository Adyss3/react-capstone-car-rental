import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Card from '../components/Card'
import porsche from "../assets/porsche.png"
import SmallerPorsche from "../assets/smaller porsche.png"
import carInterior from "../assets/car interior.png"
import carInterior2 from "../assets/car interior 2.png"
import { TiStarOutline } from "react-icons/ti"
import { IoHeart } from "react-icons/io5"
import { TiStarFullOutline } from "react-icons/ti"
import profpic from "../assets/Profil.png"
import profpic2 from "../assets/Profil2.png"
import ShopCard from "../components/ShopCard"
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [productData, setProductData] = useState([])


  const params = useParams();
  const singleData = productData && productData.length > 0 && productData.find(p => String(p.id) === params.id )
  console.log("singledata:", singleData)
  console.log("singledata:", productData)
  
  useEffect(() => {
  fetch("/data.json").then(res => res.json()).then(data => setProductData(data)).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div className="container-fluid">
        <NavBar />
      </div>
      <div className="container-fluid medium-width-detailPage">
        <div className="d-flex bg-light ">
          <div className="d-lg-block ps-1 d-none pad bg-white">
            <SideBar />
          </div>

          <div className="bg-light">
          <div className="container-fluid">
              <div className="row py-4">
                <div className="col-md-6">
                  <Card cardTitle="Sports car with the best design and acceleration" cardButton="d-none" cardBody="Safety and comfort while driving a futuristic and elegant sports car" design="card bg-primary rounded-4 p-2  shadow" cardImg={porsche} cardBodyDesign="w-100 py-3" />
                  <div className="d-flex  pt-3 justify-content-between  ">
                    <div className='bg-white align-content-center border border-1 border-primary shadow rounded-3  text-center  w-25 p-1'>
                      <div className='shadow rounded-3 bg-primary text-center py-4 w-100 h-100 align-content-center'>
                        <img src={SmallerPorsche} alt="" className='w-100 px-1' />
                      </div>
                    </div>
                    <img src={carInterior} alt="" className='w-25' />
                    <img src={carInterior2} alt="" className='w-25' />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow p-4">
                    <div className="card-title px-3">
                      <div className="d-flex justify-content-between  ">
                        <h3 className='fw-bolder'>NISSAN</h3>
                        <IoHeart size="20px" color='red' />
                      </div>

                      <div>
                        <TiStarFullOutline size="20px" color='yellow' />
                        <TiStarFullOutline size="20px" color='yellow' />
                        <TiStarFullOutline size="20px" color='yellow' />
                        <TiStarFullOutline size="20px" color='yellow' />
                        <TiStarOutline size="20px" color='grey' />
                        <small className='small text-muted'>440+ Reviewer</small>
                      </div>
                    </div>
                    <div className="card-body w-100">
                      <p className='text-muted w-100  '>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>

                      <div className='py-3'>
                        <div className="row py-2 ">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-6 text-muted text-start">Type Car</div>
                              <div className="col-6 fw-bold text-muted text-end">Sport</div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row">
                              <div className="col-6 text-muted text-start">Capacity</div>
                              <div className="col-6 fw-bold text-muted text-end">2 Person</div>
                            </div>
                          </div>
                        </div>
                        <div className="row py-2 text-end">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-6 text-muted text-start">Steering</div>
                              <div className="col-6 fw-bold text-muted text-end">Manual</div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row">
                              <div className="col-6 text-muted text-start">Gasoline</div>
                              <div className="col-6 fw-bold text-muted text-end">70L</div>
                            </div>
                          </div>
                        </div>
                      </div>



                      <div className='row pb-4'>
                        <div className="col-7 align-content-center">
                          <h4 className='fw-bold'>$80.00/<small className='text-muted fw-bold fs-6' >days</small></h4>
                          <small className='text-muted text-decoration-line-through'>$100.00</small>
                        </div>
                        <div className="col-5 align-content-center">
                          <button className='bg-primary text-white rounded-1 border-0 px-4 py-3'>Rent Now</button>
                        </div>
                        




                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* reviews */}
            <div className="bg-white rounded-2 p-2">
              <div className="container">
                <div className='py-4' >
                  Reviews
                  <span className=" py-1 px-2 bg-primary ms-3 rounded-1 text-white small">13</span>

                </div>
                <div>
                  <div className="d-flex">
                    <div>
                      <img src={profpic} alt="" />
                    </div>
                    <div className=' container w-100'>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className='fw-bold '>Alex Stanton</p>
                          <small className='align-content-start text-muted '>CEO at Bukalapak</small>
                        </div>
                        <div className='text-end'>
                          <small className='text-muted '>21 july 2022</small>
                          <div className='mt-3'>
                            <TiStarFullOutline size="20px" color='yellow' />
                            <TiStarFullOutline size="20px" color='yellow' />
                            <TiStarFullOutline size="20px" color='yellow' />
                            <TiStarFullOutline size="20px" color='yellow' />
                            <TiStarOutline size="20px" color='grey' />
                          </div>
                        </div>
                      </div>
                      <div>
                        <small className='small'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img src={profpic2} alt="" />
                    </div>
                    <div className=' container w-100'>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className='fw-bold '>Skylar Dias</p>
                          <small className='align-content-start text-muted '>CEO at Amazon</small>
                        </div>
                        <div className='text-end'>
                          <small className='text-muted '>20 july 2022</small>
                          <div className='mt-3'>
                            <TiStarFullOutline size="20px" color='yellow' />
                            <TiStarFullOutline size="20px" color='yellow' />
                            <TiStarFullOutline size="20px" color='yellow' />
                            <TiStarFullOutline size="20px" color='yellow' />
                            <TiStarOutline size="20px" color='grey' />
                          </div>
                        </div>
                      </div>
                      <div>
                        <small className='small text-muted'>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-3">
                <p className='text-muted small'>Show All <IoIosArrowDown /></p>
              </div>
            </div>

              {/* shopcards */}
            <div className='py-4'>
              <div className=" container d-flex justify-content-between py-4">
                <small className='text-muted'>Recent Car</small>
                <small className='text-primary '>View All</small>
              </div>
              <div className="row">
                {
                  productData && productData.slice(0, 3).map((p, i) => (
                    <div className="col-lg-4  pb-4 px-4" key={i}>
                      <ShopCard cardData={p} />
                    </div>
                  ))
                }
              </div>
            </div>
            <div>
              <div className=" container d-flex justify-content-between py-4">
                <small className='text-muted'>Recomendation Car</small>
                <small className='text-primary'>View All</small>
              </div>
              <div className="row">
                {
                  productData && productData.filter(p => p.carSpace >= 4).slice(1, 4).map((p, i) => (
                    <div className="col-lg-4  pb-4 px-4" key={i}>
                      <ShopCard cardData={p} />
                    </div>
                  ))
                }
              </div>
            </div>




            </div>

          </div> 
        </div>
      </div>

      <div className="container-fluid">
        <Footer />
      </div>

    </div>
  )
}

export default Detail
