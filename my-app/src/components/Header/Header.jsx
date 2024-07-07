import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { background1 } from "../../assets";

const Header = () => {
  return (
    <>
<section>
<header>
<Navbar />
<div className="">
<div className="row">
<img src={background1} alt="" />

<div className="col-md-4 col-sm-12">
<div class="text-overly">
<p className="display-1">
{" "}Find Your<br /> Dream <br />Properties<br />here<br />House Of Trusted Deals
</p>

<button type="button" class="btn btn-danger btn-lg">Read More</button>
</div>
</div>
</div>
</div>
</header>
</section>
    </>
  );
};

export default Header;
