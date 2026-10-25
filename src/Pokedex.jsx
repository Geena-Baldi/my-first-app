import EvolutionChart from "./EvolutionChart";
import StatBar from "./StatBar";

export default function Pokedex({ pokemon, onReset }) {
  const starter = pokemon.evolution[0];

  return (
    <div className="game-panel">
      <div
        className="pokedex-shell"
        style={{
          "--theme-color": pokemon.theme,
        }}
      >
        <div className="pokedex-left">
          <div className="camera"></div>

          <img
            src={starter.sprite}
            alt={starter.name}
            className="pokemon-sprite"
          />
        </div>

        <div className="pokedex-right">
          <h1>{starter.name}</h1>

          <div className="stats">
            <div className="type-row">
              <strong>Type:</strong> {pokemon.type}
            </div>

            <StatBar label="HP" value={starter.hp} />

            <StatBar label="Attack" value={starter.attack} />

            <StatBar label="Defense" value={starter.defense} />

            <StatBar label="Speed" value={starter.speed} />

            <StatBar label="Sp. Atk" value={starter.specialAttack} />
          </div>

          <EvolutionChart pokemon={pokemon} />

          <button className="reset-btn" onClick={onReset}>
            Choose Another Pokémon
          </button>
        </div>
      </div>
    </div>
  );
}
