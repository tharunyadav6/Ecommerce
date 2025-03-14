import React from 'react'
import { NavLink } from 'react-router-dom'

const Trends = () => {
  return (
    <NavLink to ="/">

<div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000" >
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img 
  src="https://img.freepik.com/free-psd/winter-sale-banner-design-template_23-2149129032.jpg?t=st=1736323634~exp=1736327234~hmac=39588e70a7ef2e06f1f7874a24cc5caf2e6cf173cc05d44b1104507de81d482f&w=996" 
  className="img-fluid d-block w-100" 
  alt="freepik.jpg"
/>
</div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/chilly-deals-winter-sale-background-design_931866-155168.jpg"   className="img-fluid d-block w-100"  alt="freepik.jpg"/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-psd/beautiful-winter-holiday-banner-template_23-2149174522.jpg?t=st=1736323794~exp=1736327394~hmac=7dc8efc4c69f06605fe52c02e2d438738f6cd6a43dedb8f35e0e8fc2b8ea948f&w=996"   className="img-fluid d-block w-100"  alt="freepik.jpg"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
   
<div>
    </div>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/32c1d797496373.5ec65c6e12f4b.jpg"   className="img-fluid d-block w-100"  alt="mir.jpg"/>
    </div>
     
  </div>
</div>
    </div>
    
    </NavLink>
     
  )
}

export default Trends
