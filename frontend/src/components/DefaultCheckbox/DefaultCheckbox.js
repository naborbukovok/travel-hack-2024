import "./DefaultCheckbox.css";

function DefaultCheckbox(props) {
  return (
    <label className="default-ch-field">
      <input
        className="default-ch-input"
        id={props.id}
        type="checkbox"
        checked
      ></input>
      <span className="default-ch-span">{props.span}</span>
    </label>
  );
}

export default DefaultCheckbox;
