import "./searchItem.css";
import { Link } from "react-router-dom";
const SearchItem = ({item}: any) => {
  return (
    <div className="searchItem">
      <Link to={`${item._id}`}>
        <img
          src={item.photos[0]}
          alt=""
          className="siImg"
        />
        </Link>
      <div className="siDesc">
      <Link to={`${item._id}`} style={{ textDecoration: 'none' }}>
        <h1 className="siTitle">{item.name}</h1>
      </Link>
        <span className="siDistance">{item.distance}m from city centre</span>
        <span className="siTaxiOp">{item.title}</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 28m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">£{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;