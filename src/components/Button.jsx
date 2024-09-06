import React from 'react'

const Button = ({design,content}) => {
  return (
    <button className={design}>
        {content}
    </button>
  )
}

export default Button
