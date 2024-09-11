import React, { useEffect, useState } from 'react'
import Navbar from "../components/NavBar"
import Section from "../components/Section"
import PickUp from "../components/PickUp"
import SwitchIcon from "../components/SwitchIcon"
import ShopCard from "../components/ShopCard"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"

const Category = () => {

  const [productData, setProductData] = useState([])

  

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProductData(data))
      .catch(err => console.log(err))
  },[])


  return (
    <div>
      <div className="container-fluid">
        <Navbar />
      </div>
      <div className="pt-1 d-flex bg-white">
        <div className="d-lg-block d-none w-25 px-4">
          <SideBar />
        </div>
        <div className='bg-light container '>
          <Section design="  px-4 py-4 w-100">
            <div className="d-lg-flex d-md-block">
              <div className="col-lg-5 bg-white rounded-3 px-2 py-3 shadow  ">
                <PickUp locationType="Pick-Up" />
              </div>
              <div className="container text-center align-content-center py-5">
                <SwitchIcon />
              </div>
              <div className="col-lg-5 bg-white rounded-3 px-2 py-3 shadow ">
                <PickUp locationType="Drop-Off" />
              </div>
            </div>
          </Section>
          <Section>
            <div className="row">
              {
                productData && productData.slice(0, 9).map((p, i) => (
                  <div className="col-lg-4  pb-4 px-4" key={i}>
                    <ShopCard cardData={p} />
                  </div>
                ))
              }
            </div>
          </Section>
          <div className="text-center py-5">
            <Link className="btn btn-primary ms-4 rounded-1" to="/category">Show More Car</Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  )
}

export default Category
