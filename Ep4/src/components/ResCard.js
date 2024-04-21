import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRatingString, cuisines } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="menu-container">
        <img className="menu" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>Price: {costForTwo} /-</h3>
        <h3>
          <span className="material-symbols-outlined">star</span>
          {avgRatingString} Star
        </h3>
      </div>
    </div>
  );
};

export default ResCard;
