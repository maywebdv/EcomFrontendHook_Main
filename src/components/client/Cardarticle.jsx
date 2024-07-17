import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Cardarticle = ({article}) => {
  return (
   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.imageart} />
      <Card.Body>
        <Card.Title>{article.reference}</Card.Title>
        <Card.Text>
          {article.designation.substr(0,20)}
        </Card.Text>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Cardarticle