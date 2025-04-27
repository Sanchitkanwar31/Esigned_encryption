import React from 'react'

function Contact() {
  return (
    <div>
      <div class="">
    <header class="header_section">
      <div class="container-fluid">
        
      </div>
    </header>
  </div>


  <section class="contact_section layout_padding">
    <div class="container">

      <div class="heading_container">
        <h2>
          Request A Call Back
        </h2>
      </div>
      <div class="">
        <div class="">
          <div class="row">
            <div class="col-md-9 mx-auto">
              <div class="contact-form">
                <form action="">
                  <div>
                    <input type="text" placeholder="Full Name "/>
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number"/>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address"/>
                  </div>
                  <div>
                    <input type="text" placeholder="Message" class="input_message"/>
                  </div>
                  <div class="d-flex justify-content-center">
                  <a href="mailto:sanchitkanwar31@gmail.com?subject=Call%20Back%20Request&body=Full%20Name:%20%0APhone%20Number:%20%0AEmail:%20%0AMessage:" target="_blank">
  <button type="button">Send</button>
</a>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map_img-box">
        <img src="images/map-img.png" alt=""/>
      </div>
    </div>
  </section>


    </div>
  )
}

export default Contact