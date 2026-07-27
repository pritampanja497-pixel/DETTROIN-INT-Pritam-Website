import "./SectionTitle.css";

function SectionTitle({
  label,
  title,
  description,
  center = false,
}) {
  return (
    <div
      className={`section-title ${
        center ? "center" : ""
      }`}
    >
      <span className="section-label">
        {label}
      </span>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;