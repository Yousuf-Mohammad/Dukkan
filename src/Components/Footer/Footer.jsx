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
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ad, reprehenderit et ratione dolorum nostrum, delectus ut adipisci accusantium aspernatur tenetur, recusandae quas fuga molestiae quia fugiat consectetur assumenda nesciunt.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam nobis quisquam et iusto. Fuga inventore expedita, ab esse, consequatur ducimus dicta quisquam quis, ratione similique aspernatur praesentium quae unde?</span>
                </div>

            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">RUBIK'S</span>
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
