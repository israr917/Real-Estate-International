import React from "react";
import "./searchprop.css";

const SearchProperty = () => {
return (
<>
<section className="mt-4" id="search">
<div class="Wrapper">
<div><h1 className="display-2 text-center">Discover Your Place To Live</h1>
</div>
<div><h3 className="h3 text-center">GET STARTED IN FEW CLICKS</h3>
</div>

<div className="container">
<div className="row">
<div className="col-lg-4 col-md-4 col-sm-4 btn ">
<div className="gapclass">
<button type="button" className="btn btn-primary  ">All Status</button>
</div>
</div>

<div className="col-lg-4 col-md-4 col-sm-4 btn">
<div className="gapclass">
<button type="button" className="btn btn-primary ">For Rent</button>
</div>
</div>

<div className="col-lg-4 col-md-4 col-sm-4 btn">
<div className="gapclass">
<button type="button" className="btn btn-primary ">For Sale</button>
</div>
</div>
</div>

            {/* Second row */}
<div className="row p-2">
<div className="col-lg-3 col-md-3  col-sm-3 text-center">
<span>Looking For</span></div>
<div className="col-lg-3 col-md-3  col-sm-3 text-center">
<span>Location</span></div>
<div className="col-lg-3 col-md-3  col-sm-3 text-center">
<span>Proerty Size</span></div>
<div className="col-lg-3 col-md-3  col-sm-3 text-center">
<span>Budget</span>
</div>
</div>
 {/* 3rd row */}
  <div className="row">
  <div className="col-lg-3 col-md-3 col-sm-3">
  <div class="input-group p-2">

  <select class="form-select" id="inputGroupSelect01" aria-label="Example select with button addon">
  <option selected>Property Type</option>
  <option value="1">Coomercial</option>
  <option value="2">Residential</option>
  <option value="3">Agricultral</option>
  <option value="4">Industrial</option>
  <option value="5">Other</option>
  </select>
  </div>
  </div>

<div className="col-lg-3 col-md-3 col-sm-3">
<div class="input-group p-2">
<select class="form-select" id="inputGroupSelect02" aria-label="Example select with button addon">
<option selected>All Provinces</option>
<option value="1">Punjab</option>
<option value="2">KPK</option>
<option value="3">Blochistan</option>
<option value="4">Sindh</option>
<option value="5">Capital</option>
<option value="6">Gilgit</option>
<option value="7">Kashmir</option>
<option value="8">Other</option>
</select>
</div>
</div>


<div className="col-lg-3 col-md-3 col-sm-3">
<div class="input-group p-2">
<select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
<option selected>Select Size</option>
<option value="1">Marla</option>
<option value="1">Kanal</option>
<option value="2">Squre Feet</option>
<option value="3">yards</option>
<option value="4">Acers</option>
<option value="4">hectare</option>
<option value="5">other</option>
</select>
</div>
</div>

<div className="col-lg-3 col-md-3 col-sm-3">
<div class="input-group p-2">
<select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
<option selected>Budget Range</option>
<option value="1">100-10000pkr</option>
<option value="1">10000-100000pkr</option>
<option value="2">1lac-10Million</option>
<option value="3">10Million to 50 Million</option>
<option value="4">{">"}50 Million</option>
<option value="5">other</option>
</select>
</div>
</div>
</div>
</div>
</div>
</section>
</>
  );
};

export default SearchProperty;
