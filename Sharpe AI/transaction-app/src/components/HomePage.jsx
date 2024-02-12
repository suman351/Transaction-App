import React from 'react';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import gif1 from './images/gif1.gif';
import gif2 from './images/gif2.gif';
import Footer from './Footer';


export default function HomePage() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" style={{ objectFit: 'cover', height: '700px' }} alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" style={{ objectFit: 'cover', height: '700px' }} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" style={{ objectFit: 'cover', height: '700px' }} alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid home-page" style={{ backgroundColor: '#E6E6FA' }}>
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="text-center text-lg-start">
              <h1 className="display-4 mb-4">Welcome to Our Transaction Platform!</h1>
              <p className="lead mb-4">Effortlessly manage your transactions with our secure and user-friendly platform.</p>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img src={img4} className="img-fluid" style={{ maxWidth: '600px' }} alt="Transaction" />
          </div>
        </div>
      </div>
      <div className="container-fluid home-page" style={{ backgroundColor: '#E6E6FA' }}>
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <img src={img5} className="img-fluid" style={{ maxWidth: '600px' }} alt="Transaction" />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="text-center text-lg-start">
              <h1 className="display-4 mb-4">Seamless Transaction</h1>
              <p className="lead mb-4">From the dawn of civilization, human beings have tried to find out order in the chaotic world surrounding them. It has however never been easy to find a solution to explain a given system while being a part of that system. The best bet is to find out the most fundamental components within the system and building a theory round these. In other words, a theory that is able to describe the world in totality has to keep the number of basic postulates it depends upon to zero or near zero.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img src={gif1} alt="GIF 1" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img src={gif2} alt="GIF 2" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
