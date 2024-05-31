import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");

    const json = await data.json();

    const dogimg = json?.message;

    setDog(dogimg);
  };

  const err = useRouteError();
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="error-container">
        <h1 className="display-6">Oops something went wrong</h1>
        {/* <p className="lead">
          {err.status} : {err.statusText}
        </p> */}
        <img className="dogimg" src={dog} />
        {/* <img className="dogimg" src={"https://http.cat/" + err.status} /> */}
      </div>
    </div>
  );
};

export default Error;
