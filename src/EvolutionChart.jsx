import { useEffect } from "react";
import * as d3 from "d3";
import EvolutionCard from "./EvolutionCard";

export default function EvolutionChart({ pokemon }) {
  useEffect(() => {
    d3.selectAll(".evolution-card")
      .style("opacity", 0)
      .style("transform", "translateY(30px)")
      .transition()
      .duration(600)
      .delay((d, i) => i * 400)
      .style("opacity", 1)
      .style("transform", "translateY(0px)");
  }, [pokemon]);

  if (!pokemon?.evolution) return null;

  return (
    <div className="evolution-section">
      <h2>Evolution Chain</h2>

      <div className="evolution-row">
        {pokemon.evolution.map((stage, index) => (
          <div key={stage.name} className="evolution-stage">
            <EvolutionCard pokemon={stage} />

            {index < pokemon.evolution.length - 1 && (
              <div className="evolution-arrow">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
