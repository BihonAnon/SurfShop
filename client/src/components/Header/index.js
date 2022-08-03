import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  console.log("works");
  };
  return (
    <header>

        <div class="container container_solid">
          <div class="title_wrapper">
            <h1>The Great Outdoors</h1>
          </div>
        </div>
      
        <div class="container container_image" aria-hidden="true">
          <div class="title_wrapper">
            <h1>Begins here</h1>
          </div>
        </div>
      
      </header>
  );
};

export default Header;
