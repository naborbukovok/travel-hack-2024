import tfIcon from "../../images/tourists-field-icon.svg";

import "./TouristsField.css";

function TouristsField(props) {
  return (
    <label className="tourists-field">
      <img src={tfIcon} alt="" className="tourists-icon" />
      <input
        onChange={props.onChange}
        className="tourists-input"
        id={props.id}
        type="number"
        min="1"
        max="30"
        step="1"
        placeholder="Туристы"
      ></input>
    </label>
  );
}

export default TouristsField;
