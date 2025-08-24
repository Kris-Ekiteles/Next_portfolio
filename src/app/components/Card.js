import React from 'react'
import Image from 'next/image';

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-img-box">
          <img src="/weather.jpg" />
        </div>
        <div className="card-body">
          <h3>Weather App</h3>
          <button>explore</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
