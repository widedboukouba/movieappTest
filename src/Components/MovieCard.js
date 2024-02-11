import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie?.posterurl} />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>
            <ReactStars
              count={5}
              size={24}
              activeColor="red"
              value={movie?.rating}
              edit={false}
            />
          </Card.Text>
          <Button variant="danger">Description</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
