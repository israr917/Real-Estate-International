import React from "react";
import "./agents.css";
import { card, agent1,agent2,agent3 } from "../../assets";

const Agents = () => {
  return (
    <>
      <section>
        <div className="Agents">
          <div className="Wrapper">
            <h1 className="display-2 text-center">Meet Our Agents</h1>
            <h5 className="display-5 text-center mb-4">
              Professionally Trained Agents{" "}
            </h5>

            <div className="container ">
            <div className="row justify-content-center">


                              {/*Agent 1  */}
                <div className="col-md-4">
                  <div class="card ">
                    <img class="card-img-top  align-self-center mt-4" src={agent1}
                      alt="Card image cap"
                      style={{ height: "250px", width: "230px" }}
                    />

                    <h4 className="text-center mt-3">
                      <a href="#">Haris Khan</a>
                    </h4>

                    <div class="card-body">
                      <h5 class="card-title text-center">
                        Comapny Agent for Real Estate

                      </h5>
                      <p class="card-text text-center mt-4 h5">
                        <small>
                          Estate Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Phasellus porta justo eget risus
                          consectetur,.
                        </small>
                      </p>
                    </div>

                    <h4 className="text-center p-3 m-4">
                      <a href="#">View Profile</a>
                                      </h4>

                  </div>
                              </div>

                              {/* Agent2 */}
                              <div className="col-md-4">
                  <div class="card ">
                    <img class="card-img-top  align-self-center mt-4" src={agent2}
                      alt="Card image cap"
                      style={{ height: "250px", width: "230px" }}
                    />

                    <h4 className="text-center mt-3">
                      <a href="#">Hasnain Ali</a>
                    </h4>

                    <div class="card-body">
                      <h5 class="card-title text-center">
                        Comapny Agent for Real Estate

                      </h5>
                      <p class="card-text text-center mt-4 h5">
                        <small>
                          Estate Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Phasellus porta justo eget risus
                          consectetur,.
                        </small>
                      </p>
                    </div>

                    <h4 className="text-center p-3 m-4">
                      <a href="#">View Profile</a>
                                      </h4>

                  </div>
                              </div>

                              {/* Agent 3 */}
                              <div className="col-md-4">
                  <div class="card ">
                    <img class="card-img-top  align-self-center mt-4" src={agent3}
                      alt="Card image cap"
                      style={{ height: "250px", width: "230px" }}
                    />

                    <h4 className="text-center mt-3">
                      <a href="#">Alizay Shah</a>
                    </h4>

                    <div class="card-body">
                      <h5 class="card-title text-center">
                        Comapny Agent for Real Estate

                      </h5>
                      <p class="card-text text-center mt-4 h5">
                        <small>
                          Estate Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Phasellus porta justo eget risus
                          consectetur,.
                        </small>
                      </p>
                    </div>

                    <h4 className="text-center p-3 m-4">
                      <a href="#">View Profile</a>
                                      </h4>

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

export default Agents;
