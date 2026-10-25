import { useState } from "react";
import OakIntro from "./OakIntro";
import StarterSelection from "./StarterSelection";
import Pokedex from "./Pokedex";
import PokeballOpening from "./PokeballOpening";
import PokemonExplorer from "./PokemonExplorer";
import "./App.css";

export const explorerPokemonData = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

export const pokemonData = {
  charmander: {
    theme: "#E76F51",
    type: "Fire",

    evolution: [
      {
        name: "Charmander",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65,
        specialAttack: 60,
      },
      {
        name: "Charmeleon",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        hp: 58,
        attack: 64,
        defense: 58,
        speed: 80,
        specialAttack: 80,
      },
      {
        name: "Charizard",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        hp: 78,
        attack: 84,
        defense: 78,
        speed: 100,
        specialAttack: 109,
      },
    ],
  },

  bulbasaur: {
    theme: "#52B788",
    type: "Grass / Poison",

    evolution: [
      {
        name: "Bulbasaur",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",

        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        specialAttack: 65,
      },

      {
        name: "Ivysaur",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",

        hp: 60,
        attack: 62,
        defense: 63,
        speed: 60,
        specialAttack: 80,
      },

      {
        name: "Venusaur",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",

        hp: 80,
        attack: 82,
        defense: 83,
        speed: 80,
        specialAttack: 100,
      },
    ],
  },

  squirtle: {
    theme: "#4D96FF",
    type: "Water",

    evolution: [
      {
        name: "Squirtle",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",

        hp: 44,
        attack: 48,
        defense: 65,
        speed: 43,
        specialAttack: 50,
      },

      {
        name: "Wartortle",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",

        hp: 59,
        attack: 63,
        defense: 80,
        speed: 58,
        specialAttack: 65,
      },

      {
        name: "Blastoise",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",

        hp: 79,
        attack: 83,
        defense: 100,
        speed: 78,
        specialAttack: 85,
      },
    ],
  },
};

function App() {
  const [screen, setScreen] = useState("starter");
  const [opening, setOpening] = useState(false);
  const [started, setStarted] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [openingPokemon, setOpeningPokemon] = useState(null);
  const handlePokemonSelect = (pokemon) => {
    setOpeningPokemon(pokemon);

    setOpening(true);

    setTimeout(() => {
      setSelectedPokemon(pokemon);
      setOpening(false);
    }, 1800);
  };

  if (opening) {
    return <PokeballOpening pokemon={openingPokemon} />;
  }

  return (
    <div className="app">
      {!started ? (
        <OakIntro
          onContinue={() => {
            setStarted(true);
            setScreen("starter");
          }}
          onExplorer={() => {
            setStarted(true);
            setScreen("explorer");
          }}
        />
      ) : (
        <>
          <nav className="app-nav">
            <button
              onClick={() => {
                setScreen("starter");
                setSelectedPokemon(null);
              }}
            >
              Starter Experience
            </button>

            <button
              onClick={() => {
                setScreen("explorer");
              }}
            >
              Pokémon Explorer
            </button>
          </nav>

          {screen === "starter" && (
            <>
              {!selectedPokemon ? (
                <StarterSelection
                  pokemonData={pokemonData}
                  onSelect={handlePokemonSelect}
                />
              ) : (
                <Pokedex
                  pokemon={selectedPokemon}
                  onReset={() => setSelectedPokemon(null)}
                />
              )}
            </>
          )}

          {screen === "explorer" && (
            <PokemonExplorer pokemonData={explorerPokemonData} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
