import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results);
      } catch (error) {
        console.errer(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      {/* <div>Hello world</div> */}
      <div className="search">
        <input
          type="text"
          placeholder={"Search Character"}
          className={"input"}
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>
      <div className="result">
        {characters.map((character) => (
          <div>
            <img src={character.image} alt={character.name} />
            <br />
            {character.name}
            <br />
            {character.species}
            <br />
            {character.gender}
            <br />
            {character.status}
            <br />
            {character.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
