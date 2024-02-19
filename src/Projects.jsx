import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cheese from './img/cheese.png'
import calc from './img/calc.png'
import todo from './img/to do.png'
import shoe from './img/shoecart.png'

function Works() {
  return ( 
    <>
    <div className=' d-inline-flex  flex-wrap w-100  gap-5   justify-content-center  align-items-center '>
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={cheese} className='  overflow-hidden  ' /> */}
      <Card.Body>
      <div class="image-container">
    <img src={todo} alt="Original Image" class="original-image"/>
    <div class="overlay">
      <img src={todo} alt="Hover Image" class="hover-image"/>
    </div>
  </div>

        <Button variant="primary"><a href="https://github.com/Aswin7538/TO-DO-LIST">git</a></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={todo} />
      <Card.Body>
      <div class="image-container">
    <img src={todo} alt="Original Image" class="original-image"/>
    <div class="overlay">
      <img src={todo} alt="Hover Image" class="hover-image"/>
    </div>
  </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={calc}  className=' overflow-hidden '/>
  <Card.Body>
      <div class="image-container">
    <img src={todo} alt="Original Image" class="original-image"/>
    <div class="overlay">
      <img src={todo} alt="Hover Image" class="hover-image"/>
    </div>
  </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe} />
        <Card.Body>
      <div class="image-container">
    <img src={todo} alt="Original Image" class="original-image"/>
    <div class="overlay">
      <img src={todo} alt="Hover Image" class="hover-image"/>
    </div>
  </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <div class="image-container">
    <img src={todo} alt="Original Image" class="original-image"/>
    <div class="overlay">
      <img src={todo} alt="Hover Image" class="hover-image"/>
    </div>
  </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <div class="image-container">
    <img src={todo} alt="Original Image" class="original-image"/>
    <div class="overlay">
      <img src={todo} alt="Hover Image" class="hover-image"/>
    </div>
  </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <div class="image-container">
    <img src={todo} alt="Original Image" class="original-image"/>
    <div class="overlay">
      <img src={todo} alt="Hover Image" class="hover-image"/>
    </div>
  </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <div class="image-container">
    <img src={todo} alt="Original Image" class="original-image"/>
    <div class="overlay">
      <img src={todo} alt="Hover Image" class="hover-image"/>
    </div>
  </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Works;