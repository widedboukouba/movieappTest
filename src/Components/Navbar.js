import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbare = ({ settext, setrate }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" > <h3 style={{color:'red', fontWeight:'900' }}>Movie App</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Description</Nav.Link>
          
            <Nav.Link href="#" >
             Contact
            </Nav.Link>
          </Nav>
          <ReactStars
    count={5}
    size={24}
    activeColor="red"
    onChange={(newRating)=>setrate( newRating)}
  />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
           onChange={(e)=>settext(e.target.value)} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbare;

