import { Link } from "react-router-dom";

import './Catalog.css';
import catalogDemo from "../../images/catalog-demo.svg";

function Catalog() {
  return (
    <div className="catalog">
      <Link to="/tour">
        <div className="catalog-button"></div>
      </Link>
      <img src={catalogDemo} alt="" className="catalog-demo" />
    </div>
  );
}

export default Catalog;
