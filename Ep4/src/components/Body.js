import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import BtnFilter from "./BtnFilter";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [ListRestuarants, setListRestuarants] = useState([]);
  //use state return array and we are doing array distructuring

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListRestuarants(restaurantList);
  };

  if (ListRestuarants.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="appBody">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <BtnFilter
        ListRestuarants={ListRestuarants}
        setListRestuarants={setListRestuarants}
      />

      <div className="res-container">
        {ListRestuarants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
