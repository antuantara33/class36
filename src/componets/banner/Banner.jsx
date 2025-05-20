import React from 'react'
import "./banner.css"
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bk2img from "../../assets/bg.jpg";
import bk3img from "../../assets/fl.webp";
import bk4img from "../../assets/fl22.webp";


const Banner = () => {
      const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='itemmi'>
        <img src={bk2img} className='w-100' alt="" />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className='itemmi'>
        <img src={bk3img} className='w-100' alt="" />
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='itemmi'>
       <img src={bk4img} className='w-100' alt="" />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;