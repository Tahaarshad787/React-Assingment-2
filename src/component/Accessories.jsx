import React from 'react';
import './Accessories.css';

const Accessories= () => {
    return(
        <div className="smartphone-section">
        <div className="container">
          <h2 className="section-title">Accessories</h2>
          <div className="smartphone-grid">
            <div className="smartphone-item">
              <div className="text-side">
                <h3 className="smartphone-title">realme Buds T110</h3>
                <p className="smartphone-description">Listen in Full Color</p>
                <p className="smartphone-price">Rs.4,999</p>
              </div>
              <div className="image-side">
              <span className="new-tag">New</span>
                <img src="/public/Airpods1.webp" alt="Smartphone 1" className="smartphone-image" />
              </div>
            </div>
    
            <div className="smartphone-item">
              <div className="text-side">
                <h3 className="smartphone-title">realme 13+ 5G</h3>
                <p className="smartphone-description">Speed to Victory</p>
                <p className="smartphone-price">Rs.89,999</p>
              </div>
              <div className="image-side">
              <span className="new-tag">New</span>
                <img src="/public/Airpods2.webp" alt="Smartphone 2" className="smartphone-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default Accessories;