import React from 'react'
import Section from "./Section"

const Footer = () => {
  return (
    <div>
      <Section design="  bg-white ">
                <div className="row py-5 px-4 ">

                    <div className="col-md-6">
                        <h3 className='text-primary ps-4 pt-5 w-100'>MORENT</h3>
                        <p className='ps-4 w-50 pe-2'>Our vision is to provide convenience and help increase your sales business.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-block ps-2 pt-5">
                                    <p className="lead fw-bold">About</p>
                                    <p className="text-muted">How it works</p>
                                    <p className="text-muted">Featured</p>
                                    <p className="text-muted">Partnership</p>
                                    <p className="text-muted">Business relations</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-block ps-2 pt-5">
                                    <p className="lead fw-bold">Community</p>
                                    <p className="text-muted">Events</p>
                                    <p className="text-muted">Blog</p>
                                    <p className="text-muted">Podcast</p>
                                    <p className="text-muted">Invite a friend</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-block  pt-5">
                                    <p className="lead fw-bold">Socials</p>
                                    <p className="text-muted">Discord</p>
                                    <p className="text-muted">Instagram</p>
                                    <p className="text-muted">Twitter</p>
                                    <p className="text-muted">Facebook</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="container ps-4 pe-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="border-top border-secondary-subtle">
                                    <div className="d-flex justify-content-between pt-5 fw-bold">
                                        <small>&copy;2022MORENT.All rights reserved</small>
                                        <div className="d-flex  gap-5">
                                            <small>Privacy & Policy</small>
                                            <small>Terms & Condition</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
    </div>
  )
}

export default Footer
