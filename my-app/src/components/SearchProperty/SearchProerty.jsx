import React from "react";
import "./searchprop.css";
import { iconarrow } from "../../assets";


const SearchProperty = () => {
  return (
    <>
      <section>
        <div class="Wrapper">
          <div>
            <h1 className="display-2 text1 ">Discover Your Place To Live</h1>
          </div>
          <div>
            <h3>GET STARTED IN FEW CLICKS</h3>
          </div>
          <div class="searchbar">
            <div class="button1">
              <button type="button" className="btn">
                All Status
              </button>
              <button type="button" className="btn">
                For Rent
              </button>
              <button type="button" className="btn">
                For Sale
              </button>
            </div>

            <div class="TextforSearch">
              <span>Looking For</span>
              <span>Location</span>
              <span>Proerty Size</span>
              <span>budget</span>

              <div class="Searchbarinput">
                <input type="input" placeholder="Property Type" />
                <input type="input" placeholder="All cities" />
                <input type="input" placeholder="Squre Feet" />
                <input type="input" placeholder="Max-Price" />

              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default SearchProperty;
