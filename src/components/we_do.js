import React from 'react';
import { useNavigate } from "react-router-dom";

function We_do() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/encrypt"); 
  };

  const handleToDecrypt = () => {
    navigate("/decrypt"); 
  };

  const handleEncryptImage = () => {
    navigate("/EncryptImage");
  };

  const handleDecryptImage = () => {
    navigate("/DecryptImage");
  };

  return (
    <section className="do_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>What we do</h2>
          <h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li> 🔐 Encrypt and Decrypt your Text</li>
              <li> 🪪 Uses 256 AES Encryption</li>
              <li> 🔓 Share encrypted text with anyone</li>
              <li> 🚀 Only you and your recipients can view your encrypted</li>
              <li> 🪪 We do not store your password or data!</li>
            </ul>
          </h3>
        </div>

        <div className="do_container">
          <div id="encryptTextDiv" className="box arrow-start arrow_bg" onClick={handleNavigate}>
            <div className="img-box">
              <img src="images/d-1.png" alt="d1" />
            </div>
            <div className="detail-box">
              <h6>Encrypt Text</h6>
            </div>
          </div>

          <div className="box arrow-middle arrow_bg" onClick={handleToDecrypt}>
            <div className="img-box">
              <img src="images/d-2.png" alt="d2" />
            </div>
            <div className="detail-box">
              <h6>Decrypt Text</h6>
            </div>
          </div>

          <div className="box arrow-middle arrow_bg" onClick={handleEncryptImage}>
            <div className="img-box">
              <img src="images/d-3.png" alt="d3" />
            </div>
            <div className="detail-box">
              <h6>Encrypt Image</h6>
            </div>
          </div>

          <div className="box arrow-end arrow_bg" onClick={handleDecryptImage}>
            <div className="img-box">
              <img src="images/d-4.png" alt="d4" />
            </div>
            <div className="detail-box">
              <h6>Decrypt Image</h6>
            </div>
          </div>

          <div className="box">
            <div className="img-box">
              <img src="images/d-5.png" alt="d5" />
            </div>
            <div className="detail-box">
              <h6>Share</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default We_do;
