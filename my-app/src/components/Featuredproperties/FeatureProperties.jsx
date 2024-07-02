import React from "react";
import './Featuredprop.css'
import { Group, iconarrow, roomInside, vector, Group1, appartment1, doubleunithouse, villa1, hotelsuit1, heromodel1 } from "../../assets";
const FeaturedProperties = () => {
  return (
    <>
      <section >
        <div className="FeaturedProeprties mt-5 m-5 ">
          <div className="Wrapper">
            <div className="heading">
              <h1 className="display-2 text-center">Featured Properties</h1>
            </div>
            <div className="small-heading text-center">
              <h5>
                Create property listing with all the features you’d expect
              </h5>
            </div>
            {/* 1st Containner */}
            <div className="container mt-4">
            <div class="row " >
              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "560px",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={roomInside}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-left">
                      Contemprary Appartment
                      <span className="type " style={{ fontSize: "16px" }}>
                        {"\u00A0"}
                        {"\u00A0"}
                        {"\u00A0"}Featured
                      </span>
                    </h5>

                    <p class="card-text p-2">
                      <span>
                        $ 3600/mo {"\u00A0"}
                        {"\u00A0"}
                        <img src={vector} alt="" srcset="" /> 3{" "}
                      </span>
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group} alt="" />3
                      </span>
                      {"  "}
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group1} alt="" />
                        {"  "}2300sqft
                      </span>
                    </p>

                    <a href="#" class="btn btn-primary">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "560px",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={appartment1}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-left">
                      Renovated Apartment
                      <span className="type " style={{ fontSize: "16px" }}>
                        {"\u00A0"}
                        {"\u00A0"}
                        {"\u00A0"}Featured
                      </span>
                    </h5>

                    <p class="card-text p-2">
                      <span>
                        $ 3600/mo {"\u00A0"}
                        {"\u00A0"}
                        <img src={vector} alt="" srcset="" /> 3{" "}
                      </span>
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group} alt="" />3
                      </span>
                      {"  "}
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group1} alt="" />
                        {"  "}2300sqft
                      </span>
                    </p>

                    <a href="#" class="btn btn-primary">
                      More Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "560px",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={doubleunithouse}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-left">
                      Renovated Apartment
                      <span className="type " style={{ fontSize: "16px" }}>
                        {"\u00A0"}
                        {"\u00A0"}
                        {"\u00A0"}Featured
                      </span>
                    </h5>

                    <p class="card-text p-2">
                      <span>
                        $ 3600/mo {"\u00A0"}
                        {"\u00A0"}
                        <img src={vector} alt="" srcset="" /> 3{" "}
                      </span>
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group} alt="" />3
                      </span>
                      {"  "}
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group1} alt="" />
                        {"  "}2300sqft
                      </span>
                    </p>

                    <a href="#" class="btn btn-primary">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>


{/* 2nd Container */}
            {/* row 2 of Featured properties */}
<div className="container mt-4">
            <div class="row">
              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "560px",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={hotelsuit1}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-left">
                      Villa 3 Distric Central
                      <span className="type " style={{ fontSize: "16px" }}>
                        {"\u00A0"}
                        {"\u00A0"}
                        {"\u00A0"}Featured
                      </span>
                    </h5>

                    <p class="card-text p-2">
                      <span>
                        $ 3600/mo {"\u00A0"}
                        {"\u00A0"}
                        <img src={vector} alt="" srcset="" /> 3{" "}
                      </span>
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group} alt="" />3
                      </span>
                      {"  "}
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group1} alt="" />
                        {"  "}2300sqft
                      </span>
                    </p>

                    <a href="#" class="btn btn-primary">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "560px",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={villa1}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-left">
                      Central Double House
                      <span className="type " style={{ fontSize: "16px" }}>
                        {"\u00A0"}
                        {"\u00A0"}
                        {"\u00A0"}Featured
                      </span>
                    </h5>

                    <p class="card-text p-2">
                      <span>
                        $ 3600/mo {"\u00A0"}
                        {"\u00A0"}
                        <img src={vector} alt="" srcset="" /> 3{" "}
                      </span>
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group} alt="" />3
                      </span>
                      {"  "}
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group1} alt="" />
                        {"  "}2300sqft
                      </span>
                    </p>

                    <a href="#" class="btn btn-primary">
                      More Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "560px",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={heromodel1}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-left">
                     Double unit House
                      <span className="type " style={{ fontSize: "16px" }}>
                        {"\u00A0"}
                        {"\u00A0"}
                        {"\u00A0"}Featured
                      </span>
                    </h5>

                    <p class="card-text p-2">
                      <span>
                        $ 3600/mo {"\u00A0"}
                        {"\u00A0"}
                        <img src={vector} alt="" srcset="" /> 3{" "}
                      </span>
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group} alt="" />3
                      </span>
                      {"  "}
                      <span>
                        {"\u00A0"}
                        {"\u00A0"}
                        <img src={Group1} alt="" />
                        {"  "}2300sqft
                      </span>
                    </p>

                    <a href="#" class="btn btn-primary">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProperties;
