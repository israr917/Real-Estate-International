import React from "react";
import "./services.css";
import { service1, service2, service3, service4, service5 } from "../../assets";
import { roomInside } from "../../assets";
const Services = () => {
  return (
    <>
<section>
<div className="Services m-5 " id="services">
<div className="Wrapper">
<div className="Heading text-center">
<h1 className="display-2">Our Services</h1>
</div>
<div className="small-heading text-center">
<h5 className="display-5">We Provide what we promise</h5>
</div>

            {/* Container */}
<div class="container mt-4 ">
<div class="row ">

                {/* card 1 */}{" "}
<div className="col-lg-4 col-md-4  col-sm-12">
<img class="card-img-top abc" src={service1} />
</div>



                {/* card2 */}
<div className="col-lg-4 col-md-4  col-sm-12 ">
<img class="card-img-top abc"src={service2} alt="Card image cap"/>
</div>



                {/* Card 3 */}
<div className="col-lg-4 col-md-4  col-sm-12 ">
<img class="card-img-top abc" src={service3} alt="Card image cap"/>
</div>

</div>
</div>

            {/* Second Container */}

<div class="container  ">
<div class="row ">

                {/* card 4 */}{" "}
<div className="col-lg-4 col-md-4  col-sm-12">
<img class="card-img-top abc" src={service4} alt="Card image cap"/>
</div>

                {/* card5 */}
<div className="col-lg-4 col-md-4  col-sm-12 ">
<img class="card-img-top abc" src={service5} alt="Card image cap"/>
</div>


                {/* Card 6 */}
  <div className="col-lg-4 col-md-4  col-sm-12 ">
  <img
  class="card-img-top abc"
  src={service3} alt="Card image cap"/>
                </div>

</div>


              {/* Button Explore More */}
<div class="d-grid  d-md-flex justify-content-end">
<a href="#" class="btn btn-primary mt-5 ">Explore More....</a>
</div>
</div>
</div>
</div>
</section>
    </>
  );
};

export default Services;
