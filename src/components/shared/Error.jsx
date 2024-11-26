import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Error = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[20%] text-center">
      <p className="text-6xl text-center font-extrabold text-green-900 ">
        404 Not Found
      </p>
      <Link to="/">
        <Button
          variant="outline"
          className="mt-10 border-green-500 hover:bg-green-100"
        >
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default Error;
