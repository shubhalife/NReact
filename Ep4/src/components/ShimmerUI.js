import ShimmerResCard from "./ShimmerResCard";
const ShimmerUI = () => {
  return (
    <>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="filter">
        <button className="shimmer-btn"></button>
        <button className="shimmer-btn"></button>
        <button className="shimmer-btn"></button>
      </div>
      <div className="res-container">
        <ShimmerResCard />
        <ShimmerResCard />
        <ShimmerResCard />
        <ShimmerResCard />
      </div>
    </>
  );
};

export default ShimmerUI;
