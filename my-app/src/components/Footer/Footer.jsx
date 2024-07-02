import React from "react";

const Footer = () => {



    return (
        <>

            <section>
                <div className="Footer">
                    <div className="container-fluid bg-dark " style={{height:"400px",color:"white" }}>
                        <div className="row ">

                            <div className="col-md-3">
                                <div className="company-log">
                                    <span className="h1 mt-4">Real Estate International</span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <ul>
                                    <li><a href="#">Home </a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul></div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}



export default Footer;
