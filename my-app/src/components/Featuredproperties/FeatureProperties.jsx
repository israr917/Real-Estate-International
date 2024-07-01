import React from "react";
import { roomInside } from "../../assets";
const FeaturedProperties = () => {
  return (
    <>
      <section>
        <div className="FeaturedProeprties mt-5">
          <div className="Wrapper">
            <div className="heading">
              <h1 className="display-2 text-center">Featured Properties</h1>
            </div>
            <div className="small-heading text-center">
              <h5>
                Create property listing with all the features you’d expect
              </h5>
            </div>
            <div class="row " style={{margin:"100px"}}>
              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "550px",

                  }}
                >
                  <img
                    class="card-img-top"
                    src={roomInside}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Contemporary Apartment </h5>
                    <p class="card-text">
                      $ 3600/mo <span> </span> 2300sqft
                    </p>
                    <a href="#" class="btn btn-primary">
                      Detials view
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "550px",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={roomInside}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Contemporary Apartment </h5>
                    <p class="card-text">
                      $ 3600/mo <span> </span> 2300sqft
                    </p>
                    <a href="#" class="btn btn-primary">
                      Detials view
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  class="card"
                  style={{
                    width: "400px",
                    height: "550px"}}
                >
                  <img
                    class="card-img-top"
                    src={roomInside}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Contemporary Apartment </h5>
                    <p class="card-text">
                      $ 3600/mo <span> </span> 2300sqft
                    </p>
                    <a href="#" class="btn btn-primary">
                      Detials view
                    </a>
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
