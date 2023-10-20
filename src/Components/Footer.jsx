import React from "react";
import './Footer.css'
import fb from "../Img/Logo-Facebook.png"
import twitter from "../Img/Logo-Twitter.png"
import insta from "../Img/Logo-Instagram.webp"
import linkedin from "../Img/Logo-Linkedin.png"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="sb_footer section_padding">
                    <div className="sb_footer-links">
                        <div className="sb_footer-links-div">
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
                            <div className="sb_fotter-links_div">
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
                            <div className="sb_footer-links_div">
                                <h4>Partners</h4>
                                <a href="/about">
                                    <p>About</p>
                                </a>
                                <a href="/Press">
                                    <p>Press</p>
                                </a>
                                <a href="/career">
                                    <p>Contact</p>
                                </a>
                            </div>
                            <div className="sb_footer-links_div">
                                <h4>Coming soon on</h4>
                                <div className="socialmedia">
                                    <p><img src={fb} alt="" /></p>
                                    <p><img src={twitter} alt="" /></p>
                                    <p><img src={linkedin} alt="" /></p>
                                    <p><img src={insta} alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer