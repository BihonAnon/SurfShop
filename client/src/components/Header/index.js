import React from 'react';

export default function Header() {
  return (
      <div className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" style="font-family: Montserrat Subrayada; font-size: 80px;">Surf</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}
