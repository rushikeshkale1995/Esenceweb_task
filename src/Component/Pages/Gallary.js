import React from 'react'
import "../Krustycone.css"

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";


function Gallary() {
  return (
    <div>
             {/* Gallery Section */}
      <section id="gallery">
        <div className="container">
          <h1 className="about-title p-5 text-center">GALLERY</h1>
          <div className="gallery">
            <img
              src={img1}
            
              width="100%"
              height="auto"
              className="gallery-img"
            />
            <img
              src={img2}
             
              width="100%"
              height="auto"
              className="gallery-img"
            />
            <img
              src={img3}
             
              width="100%"
              height="auto"
              className="gallery-img"
            />
            <img
              src={img4}
              width="100%"
              height="auto"
              className="gallery-img"
            />
            <img
              src={img5}
              width="100%"
              height="auto"
              className="gallery-img"
            />
            <img
              src={img6}
              width="100%"
              height="auto"
              className="gallery-img"
            />
            <img
              src={img7}
              width="100%"
              height="auto"
              className="gallery-img"
            />
            <img
              src={img8}
              width="100%"
              height="auto"
              className="gallery-img"
            />
            {/* Add more images here */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Gallary