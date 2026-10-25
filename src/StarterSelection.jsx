export default function StarterSelection({ pokemonData, onSelect }) {
  return (
    <div className="game-panel selection-screen">
      <h1>Choose One Pokémon</h1>

      <div className="pokeball-grid">
        {Object.values(pokemonData).map((pokemon) => (
          <div
            key={pokemon.evolution[0].name}
            className="starter-card"
            onClick={() => onSelect(pokemon)}
          >
            <div className="pokeball">
              <div className="pokeball-top"></div>

              <div className="pokeball-band"></div>

              <div className="pokeball-button"></div>

              <div className="pokeball-bottom"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
