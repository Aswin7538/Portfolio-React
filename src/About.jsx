import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from './img/WhatsApp Image 4.jpg'
import './About.css'

function BasicExample() {
  return (
    <div className='card1 row '>
    <Card style={{ width: '18rem' }} className=' clo-md-6'>
      <Card.Img variant="top" src={img3} />
      
    </Card>

    <Card style={{ width: '18rem' }} className=' '>
     
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;