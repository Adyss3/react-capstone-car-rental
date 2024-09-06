import React from 'react'
import RangeSlider from './RangeSlider'

const SideBar = () => {
    return (
        <div >
            <div className='py-4'>
                <small className='text-muted '>TYPE</small>
            </div>

            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>Sport</span>
                <small className='fs-6 text-muted'>(10)</small>
            </div>
            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>SUV</span>
                <small className='fs-6 text-muted'>(12)</small>
            </div>
            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>MPV</span>
                <small className='fs-6 text-muted'>(16)</small>
            </div>
            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>Sedan</span>
                <small className='fs-6 text-muted'>(20)</small>
            </div>
            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>Coupe</span>
                <small className='fs-6 text-muted'>(14)</small>
            </div>
            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>Hatchback</span>
                <small className='fs-6 text-muted'>(14)</small>
            </div>

            <div className='py-5'>
                <small className='text-muted '>CAPACITY</small>
            </div>

            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>2 Person</span>
                <small className='fs-6 text-muted'>(10)</small>
            </div>

            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>4 Person</span>
                <small className='fs-6 text-muted'>(14)</small>
            </div>

            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>6 Person</span>
                <small className='fs-6 text-muted'>(12)</small>
            </div>

            <div className='form-check py-2'>
                <input type="checkbox" className='form-check-input p-2 ' />
                <span className='px-2 fs-6'>8 or more</span>
                <small className='fs-6 text-muted'>(16)</small>
            </div>

            <div className='py-5'>
                <small className='text-muted '>PRICE</small>
            </div>

            <div className="py-2">
                <RangeSlider/>
                {/* <input type="range" step="10" min="0" max="100" className='w-100'/>
                <div>
                    <span>Max.<span id="rangePrimary" ></span> $</span>

                </div> */}
            </div>
        </div>
    )
}

export default SideBar
