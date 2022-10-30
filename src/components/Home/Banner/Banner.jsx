import React from 'react';
//import { Button } from 'react-bootstrap';
import {Button} from '../../../pages/Button/Button';

const Banner = () => {
   return (
      <div className="banner-container">
        <video src ='../../../../public/videos/video-1.mp4' autoPlay loop muted />
        <h1>Interior Design</h1>
        <p>What are Waiting For Contact</p>
        <div className="banner-button">
         <Button
         className= "btns"
         buttonStyle='btn--primary'
         buttonSize='btn--large'
         >
            GET STARTED
         </Button>
         <Button
         
         >
         WATCH TRAILER 
         </Button>

        </div>
      </div>
      
   );
};

export default Banner;