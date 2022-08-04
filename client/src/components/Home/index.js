import React from 'react';
import './style.css';
import Header from '../Header'
export default function Home() {
  return (
    <div>
      <div className="custom-container container_solid">
        <div className="title_wrapper">
          <h1>The Great Outdoors</h1>
        </div>\

      </div>

      <div className="custom-container container_image" aria-hidden="true">
        <div className="title_wrapper">
          <h1>Begins here</h1>
        </div>
        <Header />
      </div>
    
    </div>
  );
}
