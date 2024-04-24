import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import BtnFilter from "./BtnFilter";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [ListRestuarants, setListRestuarants] = useState([]);
  const [FilterRestuarants, setFilterRestuarants] = useState([]);

  //use state return array and we are doing array distructuring
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //optional chaining
    const restaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListRestuarants(restaurantList);
    setFilterRestuarants(restaurantList);
  };

  //Condional Rendering with ternary operator
  return ListRestuarants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="appBody">
      <div className="search">
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="Search for restuarants and food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="btncss btn btn-outline-primary"
          onClick={() => {
            console.log(searchText);
            const filterSearch = ListRestuarants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestuarants(filterSearch);
          }}
        >
          Search
        </button>
      </div>
      <BtnFilter
        ListRestuarants={ListRestuarants}
        setFilterRestuarants={setFilterRestuarants}
      />

      <div className="res-container">
        {FilterRestuarants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
