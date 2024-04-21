import ResCard from "./ResCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
import BtnFilter from "./BtnFilter";

const Body = () => {
  const [ListRestuarants, setListRestuarants] = useState(resList);
  //use state return array and we are doing array distructuring
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
