import React, { useState } from 'react'

const RangeSlider = () => {
    const [value, setValue] = useState(50)

    const range = (e) => {
        setValue(e.target.value);
    };


  return (
    <div>
        <div className="form-group">
            <input 
            type="range"
            min="0"
            max="150"
            value={value}
            onChange={range}
            className='form-control-range w-100'
            />
            <span className="form-control-range">Max.${value}.00</span>
        </div>
    </div>
  )
}

export default RangeSlider
