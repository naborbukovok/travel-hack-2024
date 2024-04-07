import "./BigField.css";

function BigField(props) {
  return (
    <label className="big-field">
      <span className="big-span">{props.span}</span>
      <textarea
        className="big-input"
        id={props.id}
        placeholder={props.placeholder}
      ></textarea>
    </label>
  );
}

export default BigField;