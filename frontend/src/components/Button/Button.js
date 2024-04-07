import "./Button.css";

function Button(props) {
  return (
    <button
      className="button"
      type="button"
      style={{ width: props.width, height: props.height, backgroundColor: props.bg }}
    >
      <div className="button__text-container">
        <p className="button__main-text">{props.main}</p>
        {props.editional && <p className="button__editional-text">{props.editional}</p>}
      </div>
    </button>
  );
}

export default Button;
