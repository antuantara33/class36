import React from 'react'
import "./about.css"
import bok from "../../assets/bok.jpeg"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Aboutresuable from '../resuable/Aboutresuable';
import bok3 from "../../assets/rose.jpeg";
import bok1 from "../../assets/roses.jpeg";
import bok2 from "../../assets/black.jpeg";



const About = () => {
  return (
    <div className='py-5'>
  <Container>
    <Row>
      <Aboutresuable cdinam={bok3}tittle= "Rose" lli="Learn More" />
      <Aboutresuable cdinam={bok1}tittle="White Rose" lli="Learn More"/>
      <Aboutresuable cdinam={bok2} tittle ="black Rose" lli="Learn More" />
    </Row>
  </Container>
  </div>
 
  );
};

export default About;