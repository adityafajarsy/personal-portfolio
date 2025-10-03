import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '', type, mobile }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text-${type} ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
