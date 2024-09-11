import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { PiSlidersHorizontalThin } from 'react-icons/pi';
import RangeSlider from './RangeSlider';

const color = {
    color: "#596780",
    fontWeight: "bold"
}
const Filter = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="" className='' onClick={handleShow}>
                < PiSlidersHorizontalThin size="30px" style={color} />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter Cars</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='w-100'>
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
                            <RangeSlider />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Filter
