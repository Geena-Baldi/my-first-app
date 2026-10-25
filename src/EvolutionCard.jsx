import StatBar from "./StatBar";

export default function EvolutionCard({ pokemon }) {
  return (
    <div className="evolution-card">
      <img
        src={pokemon.sprite}
        alt={pokemon.name}
        className="evolution-sprite"
      />

      <h3>{pokemon.name}</h3>

      <StatBar label="HP" value={pokemon.hp} />
      <StatBar label="ATK" value={pokemon.attack} />
      <StatBar label="DEF" value={pokemon.defense} />
      <StatBar label="SPD" value={pokemon.speed} />
      <StatBar label="SP ATK" value={pokemon.specialAttack} />
    </div>
  );
}
