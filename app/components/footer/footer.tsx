import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-div">
            <div className="sb_footer_section_padding">
                <div className="sb_footer_links">
                    <div className="sb_footer_links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employers</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb_footer_links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                        <a href="/contact">
                            <p>Contact Us</p>
                        </a>
                        <a href="/careers">
                            <p>Careers</p>
                        </a>
                    </div> 
                    <div className="sb_footer_links_div">
                        <h4>Resources</h4>
                         <a href="/blog">
                             <p>Blog</p>
                        </a>
                            <a href="/faq">
                            <p>FAQ</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                    </div>
                </div>
            <div className="sb_footer_bottom">
                <div className="sb_footer_bottom_div">
                    <p>
                        {new Date().getFullYear()} ByteStack. All rights reserved.
                    </p>
                </div>
                <div className="sb_footer_bottom_links">
                    <a href="/terms">
                        <p>Terms of Service</p>
                    </a>
                    <a href="/privacy">
                        <p>Privacy Policy</p>
                    </a>
            </div>

                </div>
                </div>
        </div>
    );
};

export default Footer;