import { resList } from "../utils/mockData";
const BtnFilter = (props) => {
  const { ListRestuarants, setListRestuarants } = props;
  return (
    <div className="filter">
      <button
        className="filter-btn"
        onClick={() => {
          const filterList = ListRestuarants.filter(
            (res) => res.info.avgRatingString > 4.4
          );
          setListRestuarants(filterList);
          //console.log(filterList);
        }}
      >
        Top Rated
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          const PizzaList = ListRestuarants.filter((res) =>
            res.info.cuisines.includes("Pizzas")
          );
          setListRestuarants(PizzaList);
          // console.log(PizzaList);
        }}
      >
        Pizza
      </button>
      <button
        className="clear-filter-btn"
        onClick={() => {
          setListRestuarants(resList);
        }}
      >
        Clear filter
      </button>
    </div>
  );
};

export default BtnFilter;
