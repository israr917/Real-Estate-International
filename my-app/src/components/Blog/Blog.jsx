import React from "react";

import { blog1, blog2, blog3 } from "../../assets";

const Blog = () => {
  return (
    <>
<section>
<div className=" Blog m-5 " id="blog">
<div className="Wrapper">
<div className="Heading text-center">
<h1 className="display-2">Read From Our Blogs</h1>
</div>
<div className="small-heading text-center">
<h5 className="display-5">Upto Date Blogs</h5>
</div>
            {/* Container */}
<div class="container mt-4 justify-content-center">
<div class="row justify-content-center ">
{/* Horizontal align */}

                {/* card 1 */}{" "}
<div className="col-lg-4 col-md-4 col-sm-12">
<div className="gapclass">
<a href="#"><img class="card-img-top"src={blog1} alt="Card image cap"/></a>
</div>
</div>

                {/* card2 */}
<div className="col-lg-4 col-md-4 col-sm-12">
<div className="gapclass"><a href="#"><img class="card-img-top" src={blog2} alt="Card image cap"/>
</a>
</div>
</div>

<div className="col-lg-4 col-md-4 col-sm-12">
<div className="gapclass"><a href="#"><img class="card-img-top" src={blog3} alt="Card image cap"/></a>
</div>
</div>
</div>
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

export default Blog;
