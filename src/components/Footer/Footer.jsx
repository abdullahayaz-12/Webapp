import React from 'react'
import './Footer.css'


import footerlogo from '../../assets/images/logo.png'
const Footer = () => {
  return (
    <> 
        <footer className="footer">
            <div className="container">
                <div className="row align-items-end">
                <div className="col-lg-4">
                        <div className="footer-logo">
                            <img src={footerlogo} alt="" />
                        </div>
                        <p className='address'>I am Hassan Sajid, CEO of Swiftboost.GG<br />
                        1234 Street Name, City, State, 12345<br />
                            support@swiftboost.gg</p>
                    </div>
                    <div className="col-lg-2">
                        <a href="/">Terms & Conditions</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="/">Privacy Policy</a>

                    </div>
                    <div className="col-lg-2">
                    <a href="/">Contact Us</a>

                    </div>
                    <div className="col-lg-2">
                    <a href="/">WORK WITH US</a>

                    </div>
                </div>
                <hr />
                <p>This website is not endorsed by, affiliated with, or representative of Valve in any way, shape or form. Dota 2 is a trademark or a registered trademark of Valve, Inc. in the U.S. and/or other countries.  All submitted art content remains copyright of its original copyright holder.</p>
                <p className='copyright'>© 2023. All Right Reserved. With Swiftboost.GG</p>
            </div>
        </footer>
    </>
  )
}

export default Footer