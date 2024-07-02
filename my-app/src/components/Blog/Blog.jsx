import React from "react";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  blog1,
  blog2,
  blog3,
} from "../../assets";

const Blog = () => {
  return (
    <>
      <section>
        <div className=" Blog m-5 " style={{height:"700px"}}>
          <div className="Wrapper">
            <div className="Heading text-center">
              <h1 className="display-2">Read From Our Blog</h1>
            </div>
            <div className="small-heading text-center">
              <h5 className="display-5">Upto Date Blog</h5>
            </div>
            <div class="container mt-4 justify-content-center">
              <div class="row justify-content-center ">
                {/* Horizontal align */}
                {/* card 1 */}{" "}
                <div className="col-md-4 col-lg-4">
                  <img class="card-img-top" src={blog1} alt="Card image cap" />
                </div>
                {/* card2 */}
                <div className="col-md-4 col-lg-4">
                  <img class="card-img-top" src={blog2} alt="Card image cap" />
                </div>
                <div className="col-md-4 col-lg-4 mt-2 ">
                  <img class="card-img-top" src={blog3} alt="Card image cap" />
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
      </section>
    </>
  );
};

export default Blog;
