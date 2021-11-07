import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../img1.png';
import img2 from '../img2.png';

export default function HeroSection() {
    return (
        <>
        <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="mask flex-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 order-md-1 order-2">
              <h4>Best Text Analyzer tool for 
                  <br/>Free word count
                </h4>
                <Link to="/about">Learn More</Link> </div>
            <div className="col-md-5 col-12 order-md-2 order-1">
                <img src={img1} className="mx-auto" alt="slide"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="mask flex-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 order-md-1 order-2">
            <h4>
                A simple and Instant Result for free</h4>
              <Link to="/about">Learn More</Link> </div>
            <div className="col-md-5 col-12 order-md-2 order-1">
                <img src={img2} className="mx-auto" alt="slide"/></div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> 
  <span className="carousel-control-prev-icon" aria-hidden="true"></span> 
  <span className="sr-only">Previous</span> </a> 
  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> 
  <span className="carousel-control-next-icon" aria-hidden="true"></span> 
  <span className="sr-only">Next</span> </a> </div>
        </>
    )
}
