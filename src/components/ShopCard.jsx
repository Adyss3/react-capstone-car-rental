import { IoHeartOutline } from "react-icons/io5"
import { IoHeart } from "react-icons/io5"
import { BsFuelPumpFill } from "react-icons/bs"
import { IoMdPeople } from "react-icons/io"
import { TbSteeringWheel } from "react-icons/tb"
import Button from "./Button"
import { Link } from "react-router-dom"
import { useState } from "react"

const cardImgStyle = {
  height: "160px",
  width: "100%",
  overflow: "hidden",
  marginTop: "10px"
}

const ShopCard = ({ cardData }) => {
  const [heart, setHeart] = useState(false)
 

  

 

  const favourite = (e) => {
    e.stopPropagation();
    setHeart(prev => !prev);
  };










  return (
    // 
      <div className='card shadow rounded-3 pb-2' >
        
        <div className="card-title pt-4 ps-4 ">
          <div className='d-flex justify-content-between '>
            <h4 className="fw-bold">{cardData.name}</h4>
            <button className='pe-4 border-0 bg-white ' onClick={favourite}>
              {
                heart ? <IoHeart size="20px" color='red' /> : < IoHeartOutline size="20px" />
              }
            </button>
          </div>
          <small className='text-muted'>{cardData.category}</small>
      </div>
      <Link to={`/detail/${cardData.productId}`}>
        <div className="card-img text-center py-4 " style={cardImgStyle}>
          <img src={cardData.carImg} alt="" className="w-75 h-auto" />
        </div>
      </Link>
        
        <div className="card-body d-flex justify-content-evenly text-muted align-content-center">
          <span className='pe-2'><BsFuelPumpFill className="pe-1" size="20px" color="grey" /> {cardData.carTankCapacity}</span>
          <span className="pe-2"><TbSteeringWheel className="" size="20px" color="grey" /> {cardData.carType}</span>
          <span className='pe-2'><IoMdPeople className="px-1" size="30px" color="grey" />{cardData.carSpace}</span>
        </div>
        <div className="card-end d-flex justify-content-evenly ">
          <div>
            <p className='fw-bold align-content-center '>${Number(cardData.price).toFixed(2)}/ <small className='text-muted '>day</small><br />
              {
                cardData.prevPrice ? <small className=" text-muted text-decoration-line-through fw-bold text-secondary">${Number(cardData.oldPrice).toFixed(2)}</small> : <small className="text-white ">0</small>
              }
            </p>


          </div>
        <div>
            <Link to={`/detail/${cardData.productId}`} className="btn btn-primary ms-4 rounded-1" >Rent Now</Link>
          </div>

        </div>

        
      </div>
    // </Link>



  )
}

export default ShopCard
