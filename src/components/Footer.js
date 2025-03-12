import React from 'react';

function Footer() {
  return (
    <div>
          <section className="info_section ">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <div className="img-box">
                <img src="images/location-white.png" width="18px" alt="location" />
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/telephone-white.png" width="12px" alt="telephone" />
              </div>
              <p>
                +01 1234567890
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/envelope-white.png" width="18px" alt="envelope" />
              </div>
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>
              Informations
            </h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_insta">
            <h5>
              Instagram
            </h5>
            <div className="insta_container">
              <div>
                <a href>
                  <div className="insta-box b-1">
                    <img src="images/insta.png" alt="insta" />
                  </div>
                </a>
                <a href>
                  <div className="insta-box b-2">
                    <img src="images/insta.png" alt="insta" />
                  </div>
                </a>
              </div>
              <div>
                <a href>
                  <div className="insta-box b-3">
                    <img src="images/insta.png" alt="insta" />
                  </div>
                </a>
                <a href>
                  <div className="insta-box b-4">
                    <img src="images/insta.png" alt="insta" />
                  </div>
                </a>
              </div>
              <div>
                <a href>
                  <div className="insta-box b-3">
                    <img src="images/insta.png" alt="insta" />
                  </div>
                </a>
                <a href>
                  <div className="insta-box b-4">
                    <img src="images/insta.png" alt="insta" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action>
              <input type="email" placeholder="Enter your email" />
              <button>
                Subscribe
              </button>
            </form>
            <div className="social_box">
              <a href>
                <img src="images/fb.png" alt="fb" />
              </a>
              <a href>
                <img src="images/twitter.png" alt="twiter" />
              </a>
              <a href>
                <img src="images/linkedin.png" alt="linkdein" />
              </a>
              <a href>
                <img src="images/youtube.png" alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info_section */}
  {/* footer section */}
  <section className="container-fluid footer_section">
    <p>
      © 2025 All Rights Reserved By 
      <a href="https://www.linkedin.com/in/sanchit-kanwar-6aa039283/"> <strong>Sanchit Kanwar</strong> </a>
    </p>
  </section>
    </div>
  );
}

export default Footer
