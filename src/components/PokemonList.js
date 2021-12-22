import "./PokemonList.css";

function PokemonList({ list }) {
  return (
    <div className="pokemon-list">
      {list.map((el) => {
        return <div key={el.name}>{el.name.toUpperCase()}</div>;
      })}
    </div>
  );
}

export default PokemonList;
