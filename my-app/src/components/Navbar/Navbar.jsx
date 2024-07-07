import React, { useState } from "react";
import "./Navbar.css";
import { closeIcon, headset, MenuIcon } from "../../assets";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

return (
<>
<div className="contanier">
<div className="row ">
<nav>
<div class="company">
<h3>Real Estate International</h3>
</div>

<ul>
<li><a href="#">Home</a></li>
<li><a href="#search">Search</a></li>
<li><a href="#featured">Featured </a></li>
<li><a href="#services">Services</a></li>
<li><a href="#agent">Agent</a></li>
<li><a href="#blog">Blog</a></li>
<li><a href="#contactus">Conatact Us</a></li>
</ul>

<div class="contact-info">
<img src={headset} alt="" className="headset" />
<p>
+92-343-5711917
<br />
+92-343-5711917</p>
</div>

            {/* Menu Icon for Mobile  version*/}
<div onClick={() => setIsActive(true)} className="menu-icon">
<img src={MenuIcon} alt="" srcset="" />
</div>
</nav>

<div className={`mobile-menu-container  ${isActive ? "active" : ""}`}>
<div onClick={() => setIsActive(false)} className="close-icon ">
<img src={closeIcon} alt="" srcset="" />
</div>

<ul className="menu-items">
<li><a href="#" onClick={() => setIsActive(false)}>Home</a></li>
<li><a href="#search" onClick={() => setIsActive(false)}>Search</a></li>
<li><a href="#featured" onClick={() => setIsActive(false)}>Featured{" "}</a></li><li>
<a href="#services" onClick={() => setIsActive(false)}>Services</a></li>
<li><a href="#agent" onClick={() => setIsActive(false)}>Agent</a></li>
<li><a href="#blog" onClick={() => setIsActive(false)}>Blog</a></li>
<li><a href="#contactus" onClick={() => setIsActive(false)}>Conatact Us</a></li>
</ul>
</div>
</div>
</div>
</>
  );
};

export default Navbar;
