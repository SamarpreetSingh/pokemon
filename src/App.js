import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let CancelToken = axios.CancelToken;
    let cancel;
    setLoading(true);
    axios
      .get(page, {
        cancelToken: new CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemons(res.data.results);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
      });
    setLoading(false);

    return () => cancel();
  }, [page]);

  function changeNext() {
    setPage(nextPage);
  }
  function changePrev() {
    setPage(prevPage);
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <div className="App">
      <div className="title"></div>
      <PokemonList list={pokemons} />
      <Pagination
        changeNext={nextPage ? changeNext : null}
        changePrev={prevPage ? changePrev : null}
      />
    </div>
  );
}

export default App;
