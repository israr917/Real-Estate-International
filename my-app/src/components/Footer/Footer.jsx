import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div class="d-flex flex-column h-100 bg-success" id="contactus">
        <section class="hero text-white  flex-grow-1 ">
          <div class="container py-4">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-4 ">Real Estate International</h1>
              </div>
              <p>House Of Trusted Deals</p>
            </div>
          </div>
        </section>

        <footer class="w-100 py-4 flex-shrink-0">
          <div class="container py-4">
            <div class="row gy-4 gx-5">
              <div class="col-lg-4 col-md-6">
                <h5 class="h1 text-white"></h5>
                <p class="small  text-white"></p>
                <p class="small  mb-0 text-white">
                  &copy; REI 2019 All Rights Reserved.{" "}
                  <a class="text-white" href="#">
                    Real Estate International
                  </a>
                </p>
              </div>
              <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">About</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#">About Company</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Account</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My Task</a>
                  </li>
                  <li>
                    <a href="#">Project</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6">
                <h5 class="text-white mb-3">Contact Us</h5>
                <p class="small text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <form action="#">
                  <div class="input-group mb-3">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-primary"
                      id="button-addon2"
                      type="button"
                    >
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
