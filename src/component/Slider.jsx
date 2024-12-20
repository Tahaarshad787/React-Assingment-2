import React from "react";
import "./Slider.css";

const Slider = () => {
    return(
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/public/silder.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/public/silder2.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/public/slider3.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/public/slider4.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/public/slider5.webp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    )
}

export default Slider