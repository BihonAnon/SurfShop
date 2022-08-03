import React from 'react';
import './style.css';
export default function Home() {
  return (
      <div className="container container_solid">
    <div className='customHeader'>
        <div className="title_wrapper">
          <h1>The Great Outdoors</h1>
        </div>
      </div>

      <div className="container container_image" aria-hidden="true">
        <div className="title_wrapper">
          <h1>Begins here</h1>
        </div>
      </div>
    </div>
  );
}
