import "./Button.css";

function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  return (
    <a
      href={href}
      className={`custom-button ${variant}`}
    >
      {children}
    </a>
  );
}

export default Button;