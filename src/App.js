import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import Addmovie from "./Components/Addmovie";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { getAllMovies } from "./redux/moviesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  const [text, setText] = useState("");
  const [rate, setRate] = useState();

  return (
    <div className="App">
      <Navbar setText={setText} setRate={setRate}></Navbar>
      <Addmovie />
      <MovieList text={text} rate={rate}></MovieList>
    </div>
  );
}

export default App;
