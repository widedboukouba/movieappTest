import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Addmovie = ({ movies, setmovies }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const [newmovie, setnewmovie] = useState({
    name:"",
    description:"",
    posterurl:"",
    rating:""
  })
const add=()=>setmovies([ ...movies, newmovie])
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
      +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="inputPassword5" >Poster Url </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setnewmovie({ ...newmovie, posterurl: e.target.value })}  />
   <Form.Label htmlFor="inputPassword5" >Name Movie</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setnewmovie({ ...newmovie, name: e.target.value })}/>
       <Form.Label htmlFor="inputPassword5" >Description</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setnewmovie({ ...newmovie, description: e.target.value })}/>
          <Form.Label htmlFor="inputPassword5" >Rating</Form.Label>
      <Form.Control
        type="number"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setnewmovie({ ...newmovie, rating: e.target.value })} />


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {
            add();
            handleClose();}}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addmovie
