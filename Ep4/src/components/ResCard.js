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
        <h5>{name}</h5>
        <h6>{cuisines.join(", ")}</h6>
        <h6>Price: {costForTwo} /-</h6>
        <h6>
          <span className="material-symbols-outlined">star</span>
          {avgRatingString} Star
        </h6>
      </div>
    </div>
  );
};

export default ResCard;
