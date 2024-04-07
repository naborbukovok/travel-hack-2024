import dfIcon from "../../images/date-field-icon.svg";

import "./DateField.css";

function DateField(props) {
  return (
    <label className="date-field">
      <img src={dfIcon} alt="" className="date-icon" />
      <input
        className="date-input"
        id={props.id}
        type="date"
        placeholder="Дата"
      ></input>
    </label>
  );
}

export default DateField;
