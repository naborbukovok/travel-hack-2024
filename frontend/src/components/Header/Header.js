import './Header.css';
import header from "../../images/header.svg";
import blueLine from "../../images/blue-line.svg";

function Header() {
  return (
    <div className="header">
      <img src={header} alt="" className="header-pic" />
      <img src={blueLine} alt="" className="blue-line-pic" />
    </div>
  );
}

export default Header;
