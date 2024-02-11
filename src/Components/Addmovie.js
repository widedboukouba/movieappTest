import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addMovie } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";

const Addmovie = ({ movies, setMovies }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    name: "",
    description: "",
    posterurl: "",
    rating: "",
  });

  const add = () => dispatch(addMovie({ data: newMovie }));

  return (
    <div>
      <Button style={{ margin: 20 }} variant="danger" onClick={handleShow}>
        ADD New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputPassword5">Poster Url </Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterurl: e.target.value })
            }
          />
          <Form.Label htmlFor="inputPassword5">Name Movie</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
          />
          <Form.Label htmlFor="inputPassword5">Description</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />
          <Form.Label htmlFor="inputPassword5">Rating</Form.Label>
          <Form.Control
            type="number"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              add();
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Addmovie;
