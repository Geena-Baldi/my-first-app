export default function PokeballOpening({ pokemon }) {
  const starter = pokemon?.evolution?.[0];

  return (
    <div className="opening-screen">
      <div className="opening-pokeball">
        <div className="opening-top-half">
          <div className="band-top"></div>

          <div className="opening-center-button"></div>
        </div>

        <div className="opening-bottom-half">
          <div className="band-bottom"></div>
        </div>
      </div>

      {starter && <div className="pokemon-emerge">✨</div>}

      <h2>Go {starter?.name || "!"}!</h2>
    </div>
  );
}
