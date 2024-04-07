import "./DefaultField.css";

function DefaultField(props) {
  return (
    <label className="default-field">
      <span className="default-span">{props.span}</span>
      <input
        className="default-input"
        id={props.id}
        type="text"
        placeholder={props.placeholder}
      ></input>
      {props.extra && <span className="default-extra">{props.extra}</span>}
    </label>
  );
}

export default DefaultField;
