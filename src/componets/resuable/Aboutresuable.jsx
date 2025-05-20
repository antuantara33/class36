import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';

const Aboutresuable = ({cdinam,tittle,lli}) => {
  return (
      <Col lg={4}>
         <Card>
      <Card.Img variant="top" src={cdinam} className='w-100'/>
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">{lli}</Button>
      </Card.Body>
    </Card>
        
        </Col>
  );
}

export default Aboutresuable