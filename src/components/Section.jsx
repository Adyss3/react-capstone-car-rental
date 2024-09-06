import React from 'react'

const Section = ({design, children}) => {
  return (
    <div className={design}>
        {children}
    </div>
  )
}

export default Section
