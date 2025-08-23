import React from 'react'
import Image from 'next/image';
const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-img-box">
          <img src="public\next.svg" />
        </div>
        <div className='card-body'>
          <h3>name</h3>
          <p>view/ btn</p>

        </div>
      </div>
    </div>
  );
}

export default Card;
