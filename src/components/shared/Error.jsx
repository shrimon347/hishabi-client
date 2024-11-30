import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[20%] text-center">
      <p className="text-6xl text-center font-extrabold text-green-900 ">
        404 Not Found
      </p>
      <Link to="/">
        <button className="btn btn-primary mt-10">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
