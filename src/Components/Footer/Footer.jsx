import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (

        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Category</h1>
                    <span>Men</span>
                    <span>Women</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>


                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                </div>


                <div className="item">
                    <h1>About</h1>
                    <span>
                        Rubik's is a brand that celebrates individuality and creativity, offering fashion-forward options that are both stylish and functional.<br />

                        We offer stylish and trendy clothing options for men, women and children. Inspired by the iconic Rubik's cube puzzle, the brand aims to bring creativity, originality, and fun to the world of fashion.<br />

                        In addition to our clothing offerings, Rubik's also offers accessories such as hats and bags that complement their clothing line perfectly.


                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>For any inquiries or feedback, please feel free to contact us via the following channels:<br /><hr /><hr /><br />

                        Email: info@rubicksthecloth.com <br />
                        Phone: +880 13263846 <br />
                        Address: 23 Kolpona Street,Kuril.Dhaka <br /><br />
                        We look forward to hearing from you!
                    </span>
                </div>

            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo"><img src="/images/rubiks-cube-29397.png" width='150px' alt="" /></span>
                    <span className="copyright"> © Copright 2023. All Right Reserved. Devloped by Yousuf  </span>
                </div>
                <div className="right">
                    <img className="images" src="/images/pngwing.com (1).png" alt="" />

                </div>

            </div>
        </div>

    );
}

export default Footer;
