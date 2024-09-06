import React from 'react'
import Button from "./Button"

const Card = ({design ,cardImg,cardTitle,cardBody,cardButton,cardBodyDesign,cardTitleDesign  }) => {

  const style={
    height: "100%",
    widtht: "120px",
    overflow: "hidden",
    marginRight:"20px"
  }
  return (
    <div className={design} >
      <div className="card-body text-white w-100">
        <h3 className={cardTitleDesign}>{cardTitle}</h3>
        <p className={cardBodyDesign}>{cardBody}</p>
        <Button design={cardButton} content="Rental Car"/>
      </div>
      <div className='row justify-content-center ' style={style}>
        <img src={cardImg} alt="" className='w-75 pb-1 ' />
      </div>
    </div>
  )
}

export default Card
