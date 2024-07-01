import React from "react";
import './Navbar.css'
import { headset } from "../../assets";

const Navbar = () => {

    return (
        <>
        <section>
                <nav>
                    <div class="company">
                    <h3>Real Estate International</h3>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Properties</a></li>
                        <li><a href="#">Agent</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">gallery</a></li>
                        <li><a href="#">Contact Us</a></li>

                    </ul>
                    <div className="nav-icon"><img src={headset} alt="" /></div>
                    <div class="contact-info">
                        <p>+92-343-5711917</p>
                        <p>+92-343-5711917</p>
                    </div>

                </nav>
        </section>
        </>
)

}


export default Navbar;
