import { Link } from "react-router-dom";

import './Catalog.css';
import React from "react";
import header from "../../images/header.svg";
import breadcrumbs from "../../images/breadcrumbs.svg";
import search from "../../images/search.svg";
import filters from "../../images/filters.svg";
import recommends from "../../images/recommends_filters.svg";
import twoCapitalsCard from "../../images/card_two_capitals.svg";
import weekendsCard from "../../images/weekends.svg";
import foodCard from "../../images/food_card.svg";
import russPassRecommends from "../../images/russpass_recommends.svg";
import iLoveMum from "../../images/i_love_mum.svg";
import specialForYou from "../../images/special_for_you.svg";
import haveBeenHere from "../../images/you_have-been-here.svg";
import pagination from "../../images/pagination.svg";

function DefaultCards () {
    return <>
        <Link to="/tour">
            <img src={twoCapitalsCard} alt=""/>
        </Link>
        <Link to="/tour">
            <img src={weekendsCard} alt=""/>
        </Link>
        <Link to="/tour">
            <img src={weekendsCard} alt=""/>
        </Link>
        <Link to="/tour">
            <img src={foodCard} alt=""/>
        </Link></>
}
function Catalog() {
  return (
      <>
          <div className="header">
              <img src={header} alt="" className="header-pic"/>
              <img src={breadcrumbs} alt="" className="header-breadcrumbs"/>
          </div>
          <div className="shortcut__container">
              <h1 className="shortcut__title">Туры</h1>
              <img src={search} alt="" className="shortcut__search"/>
          </div>
          <div className="catalog__main">
              <div>
                  <img src={filters} alt=""/>
              </div>
              <div className="catalog__main__right">
                  <img src={recommends} alt=""/>
                  <div className="catalog__main__cards">
          <DefaultCards />
                      <Link to="/tour">

                      <img src={russPassRecommends} alt="" />
                      </Link>
          <DefaultCards />
                      <Link to="/tour">
                      <img src={iLoveMum} alt="" />
                      </Link>
          <DefaultCards />
                      <Link to="/tour">
                          <img src={specialForYou} alt=""/>
                      </Link>
                      <DefaultCards />
                      <Link to="/tour">
                          <img src={haveBeenHere} alt=""/>
                      </Link>
                      <img src={pagination} alt="" />
                  </div>
              </div>
          </div>
      </>

  );
}

export default Catalog;
