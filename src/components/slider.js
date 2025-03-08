import React from 'react';
import { NavLink } from 'react-router-dom';

function Slider() {
  return (
    <section className="slider_section position-relative">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            {/* First carousel item */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>Welcome to our</h2>
                      <h1>ENCRYPTION WEBSITE</h1>
                      <p>
                        This online tool provides encryption and decryption of any text with a random key. This tool
                        uses a random key which nobody knows and hence provides utmost security for any text that you
                        want to protect.
                      </p>
                      <div className="cta">
                        <NavLink to={"/contact"}>Contact us</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second carousel item */}
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>Welcome to</h2>
                      <h1>Web Agency</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className="cta">
                        <a href="#">Contact us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Third carousel item */}
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>Welcome to</h2>
                      <h1>Our Service</h1>
                      <p>
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et
                        commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                      </p>
                      <div className="cta">
                        <a href="#">Contact us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Slider;
