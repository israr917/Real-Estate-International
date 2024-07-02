import React from "react";
import "./services.css";
import { service1, service2, service3, service4, service5 } from "../../assets";
import { roomInside } from "../../assets";
const Services = () => {
  return (
    <>
      <section>
        <div className="Services m-5 ">
          <div className="Wrapper">
            <div className="Heading text-center">
              <h1 className="display-2">Our Services</h1>
            </div>
            <div className="small-heading text-center">
              <h5 className="display-5">We Provide what we promise</h5>
            </div>
            <div class="container mt-4">
              <div class="row justify-content-center">
                {/* Horizontal align */}
                {/* card 1 */}{" "}
                <div className="col-md-4 col-lg-4">
                  <img
                    class="card-img-top"
                    src={service1}
                    alt="Card image cap"
                  />
                </div>
                {/* card2 */}
                <div className="col-md-4 col-lg-4">
                  <img
                    class="card-img-top"
                    src={service2}
                    alt="Card image cap"
                  />
                </div>
                {/* Card 3 */}
                <div className="col-md-4 col-lg-4 ">
                  <div class="card" style={{ width: "350px", height: "350px" }}>
                    <img
                      class="card-img-top"
                      src={service3}
                      alt="Card image cap"
                    />
                  </div>
                </div>
              </div>
              <div className="container ">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-2 ">
                    <img
                      class="card-img-top"
                      src={service4}
                      alt="Card image cap"
                    />
                  </div>

                  {/* Card 5 */}
                  <div className="col-md-4 col-lg-4 mt-2">
                    <img
                      class="card-img-top"
                      src={service5}
                      alt="Card image cap"
                    />
                  </div>
                </div>

                <div class="d-grid  d-md-flex justify-content-end">
                  <a href="#" class="btn btn-primary mt-5 ">
                    Explore More....
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
