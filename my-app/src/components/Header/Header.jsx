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

          <div className=" row ">
            <img src={background1} alt="" className="img-fluid" />
          </div>
          <div class="text-overly ">
            <p className="display-1">
              {" "}
              Find Your
              <br /> Dream <br />
              Properties<br></br> here
            </p>
            <p className="display-6 ">House Of Trusted Deals</p>

            <button type="button" class="btn">
              Read More
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
