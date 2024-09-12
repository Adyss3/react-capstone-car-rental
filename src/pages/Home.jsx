// import React from 'react'
import NavBar from "../components/NavBar"
import Section from "../components/Section"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import PickUp from '../components/PickUp'
import SwitchIcon from '../components/SwitchIcon'
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import ShopCard from "../components/ShopCard"


const Home = () => {
    const [productData, setProductData] = useState([])



    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setProductData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className='container-fluid'>
                <NavBar />
            </div>

            <div className='bg-light container-fluid'>
                {/* AFTER THE NAVBAR SECTION  */}
                <Section design=" bg-light">
                    {/* CONTAINS 2 CARDS  */}
                    <div className="row">
                        {/* 1ST CARD  */}
                        <div className="col-md-6 py-2">
                            <Card design="card bg-info rounded-4 pb-4 shadow" cardTitle="The Best Platform  for Car Rental" cardBody="Ease of doing a car rental safely and reliably. Of course at a low price." cardImg={"/assets/still porsche.png"} cardButton="btn btn-primary ms-4 rounded-1" cardBodyDesign='w-50 ps-4  medium-size small-screen-card' cardTitleDesign=' ps-4 pe-2 w-50 big-size small-screen-card' />
                        </div>
                        {/* 2ND CARD  */}
                        <div className="col-md-6 py-2">
                            <Card design="card bg-primary rounded-4 pb-2  shadow" cardTitle="Easy way to rent a car at a low price" cardBody="Providing cheap car rental services and safe and comfortable facilities." cardImg={"/assets/porsche.png"} cardButton="btn btn-info text-white ms-4 rounded-1" cardBodyDesign='w-50 ps-4 medium-size small-screen-card' cardTitleDesign=' ps-4 pe-2 w-50 big-size small-screen-card' />
                        </div>
                    </div>
                </Section>

                {/* THE DELIVERY SECTION */}

                <Section design="container-fluid py-4 ">
                    {/* LOCATION */}
                    <div className="row">
                        <div className="col-lg-5 bg-white rounded-3 px-2 py-4 shadow">
                            <PickUp locationType="Pick-Up" />
                        </div>

                        {/* SWITCH ICON */}
                        <div className="col-lg-2  align-content-center  text-center py-5">
                            <div className="container text-center">
                                <SwitchIcon />
                            </div>
                        </div>

                        {/* Drop-off  */}
                        <div className="col-lg-5 bg-white rounded-3 px-2 py-4 shadow">
                            <PickUp locationType="Drop-Off" />
                        </div>
                    </div>
                </Section>

                <Section design=" ">
                    <div className="py-3">
                        <small className='text-muted ps-4 mb-4'>Popular Car</small>
                    </div>

                    <div className="row">
                        {
                            productData && productData.filter(p => p.sold >= 50).map((p, i) => (
                                <div className="col-md-3 pb-4" key={i}>
                                    <ShopCard cardData={p} />
                                </div>
                            ))
                        }
                    </div>

                    <div className="pb-3">
                        <small className='text-muted ps-4 mb-4'>Recomendation Car</small>
                    </div>
                    <div className="row">
                        {
                            productData && productData.filter(p => p.carSpace >= 4).slice(1, 9).map((p, i) => (
                                <div className="col-md-3 pb-4" key={i}>
                                    <ShopCard cardData={p} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center py-5">
                        <Link className="btn btn-primary ms-4 rounded-1" to="/category">Show More Car</Link>
                    </div>
                </Section>



            </div>
            <div className="container-fluid">
                <Footer />
            </div>

        </div>
    )
}

export default Home
