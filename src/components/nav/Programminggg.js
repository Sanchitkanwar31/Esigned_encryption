import React from 'react';

function Programminggg() {
  return (
    <div>
      <header className="header_section">
        <div className="container-fluid"></div>
      </header>

      <section className="who_section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Side */}
            <div className="col-md-5">
              <div className="img-box text-center">
                <img src="programming.png" alt="programming" className="img-fluid" />
              </div>
            </div>

            {/* Text Side */}
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container mb-4">
                  <h2>Programming</h2>
                </div>
                <h5>
                  Encryption is the process of translating plain text data (plaintext) into something that appears to be random and meaningless (ciphertext).
                  <br /><br />
                  Decryption is the process of converting ciphertext back to plain text.
                  To encrypt more than a small amount of data, symmetric encryption is used.
                  <br /><br />
                  A symmetric key is used during both the encryption and decryption processes. 
                  To decrypt a particular piece of ciphertext, the key that was used to encrypt the data must be used.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programminggg;
