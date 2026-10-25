export default function StatBar({ label, value }) {
  const percentage = (Math.min(value, 120) / 120) * 100;

  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>

      <div className="bar-container">
        <div
          className="bar-fill"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <span className="stat-value">{value}</span>
    </div>
  );
}
