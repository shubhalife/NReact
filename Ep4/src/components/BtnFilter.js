import { resList } from "../utils/mockData";
const BtnFilter = (props) => {
  const { ListRestuarants, setFilterRestuarants } = props;
  return (
    <div className="filter">
      <button
        className="btn btn-outline-danger btncss"
        onClick={() => {
          const filterList = ListRestuarants.filter(
            (res) => res.info.avgRatingString > 4.4
          );
          setFilterRestuarants(filterList);
          //console.log(filterList);
        }}
      >
        Top Rated
      </button>
      <button
        className="btn btn-outline-danger btncss"
        onClick={() => {
          const PizzaList = ListRestuarants.filter((res) =>
            res.info.cuisines.includes("Pizzas")
          );
          setFilterRestuarants(PizzaList);
          // console.log(PizzaList);
        }}
      >
        Pizza
      </button>
      <button
        className="btn btn-outline-primary btncss"
        onClick={() => {
          setFilterRestuarants(ListRestuarants);
        }}
      >
        Clear filter
      </button>
    </div>
  );
};

export default BtnFilter;
