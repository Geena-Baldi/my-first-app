import oak from "./assets/oak.png";

export default function OakIntro({ onContinue, onExplorer }) {
  return (
    <div className="game-panel oak-screen">
      <div className="oak-card">
        <img src={oak} alt="Professor Oak" className="oak-image" />

        <div className="oak-dialog">
          <h1>Welcome to the World of Pokémon!</h1>

          <p>My name is Oak!</p>

          <p>People call me the Pokémon Professor.</p>

          <p>Your very own Pokémon legend is about to unfold!</p>

          <button className="next-btn" onClick={onContinue}>
            Starter Experience
          </button>

          <button className="next-btn" onClick={onExplorer}>
            Pokémon Explorer
          </button>
        </div>
      </div>
    </div>
  );
}
