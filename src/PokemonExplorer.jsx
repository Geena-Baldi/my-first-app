import { useMemo, useState } from "react";

export default function PokemonExplorer({ pokemonData }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const types = ["All", ...new Set(pokemonData.map((pokemon) => pokemon.type))];

  const filteredPokemon = useMemo(() => {
    const filtered = pokemonData.filter(
      (pokemon) =>
        (typeFilter === "All" || pokemon.type === typeFilter) &&
        pokemon.name.toLowerCase().includes(search.toLowerCase()),
    );

    return filtered.sort((a, b) => {
      if (sortBy === "hp") {
        return b.hp - a.hp;
      }

      if (sortBy === "attack") {
        return b.attack - a.attack;
      }

      return a.name.localeCompare(b.name);
    });
  }, [pokemonData, search, typeFilter, sortBy]);

  const getTypeColor = (type) => {
    const colors = {
      Fire: "#E76F51",
      Water: "#4D96FF",
      Grass: "#52B788",
      Electric: "#F4D35E",
      Psychic: "#C084FC",
      Normal: "#A8A29E",
      Ghost: "#7C3AED",
      Dragon: "#2563EB",
      Fighting: "#DC2626",
      Rock: "#92400E",
    };

    return colors[type] || "#94A3B8";
  };

  return (
    <div className="explorer-screen">
      <h1>Pokémon Explorer</h1>

      <div className="explorer-controls">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>

          <option value="hp">Sort by HP</option>

          <option value="attack">Sort by Attack</option>
        </select>
      </div>

      <div className="filter-row">
        {types.map((type) => (
          <button
            key={type}
            className={`type-pill ${typeFilter === type ? "active" : ""}`}
            onClick={() => setTypeFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="pokemon-grid">
        {filteredPokemon.map((pokemon) => (
          <div
            key={pokemon.id}
            className="pokemon-card"
            style={{
              borderTop: `6px solid ${getTypeColor(pokemon.type)}`,
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              className="pokemon-card-sprite"
            />

            <h3>{pokemon.name}</h3>

            <span
              className="pokemon-type"
              style={{
                background: getTypeColor(pokemon.type),
              }}
            >
              {pokemon.type}
            </span>

            <div className="mini-stat">
              <span>HP</span>

              <div className="mini-bar">
                <div
                  className="mini-fill"
                  style={{
                    width: `${(pokemon.hp / 160) * 100}%`,
                    background: getTypeColor(pokemon.type),
                  }}
                />
              </div>

              <span>{pokemon.hp}</span>
            </div>

            <div className="mini-stat">
              <span>ATK</span>

              <div className="mini-bar">
                <div
                  className="mini-fill"
                  style={{
                    width: `${(pokemon.attack / 140) * 100}%`,
                    background: getTypeColor(pokemon.type),
                  }}
                />
              </div>

              <span>{pokemon.attack}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
