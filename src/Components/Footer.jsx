import React from "react";
import './Footer.css'
import fb from "../Img/Logo-Facebook.png"
import twitter from "../Img/Logo-Twitter.png"
import insta from "../Img/Logo-Instagram.webp"
import linkedin from "../Img/Logo-Linkedin.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links">
                        <div className="sb__footer-links_div">
                            <h4>for business</h4>
                            <a href="/employer">
                                <p>Employer</p>
                            </a>
                            <a href="/Health Plan">
                                <p>Health Plan</p>
                            </a>
                            <a href="/individual">
                                <p>individual</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>for business</h4>
                            <a href="/resource">
                                <p>Resource center</p>
                            </a>
                            <a href="/resource">
                                <p>Testimonials</p>
                            </a>
                            <a href="/resource">
                                <p>STV</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Partners</h4>
                            <a href="/about">
                                <p>About</p>
                            </a>
                            <a href="/Press">
                                <p>Press</p>
                            </a>
                            <a href="/career">
                                <p>career</p>
                            </a>
                            <a href="/contact">
                                <p>Contact</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Coming soon on</h4>
                            <div className="socialmedia">
                                <a href="https://www.facebook.com/"><img src={fb} alt="" /></a>
                                <a href="https://twitter.com/?lang=es"><img src={twitter} alt="" /></a>
                                <a href="https://www.linkedin.com/feed/"><img src={linkedin} alt="" /></a>
                                <a href="https://www.instagram.com/"><img src={insta} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} codeinn. all right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declarations</p></div></a>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default Footer;