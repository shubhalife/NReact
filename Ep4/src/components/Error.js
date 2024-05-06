import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-6">Oops something went wrong</h1>
        <p className="lead">
          {err.status} : {err.statusText}
        </p>
      </div>
    </div>
  );
};

export default Error;
