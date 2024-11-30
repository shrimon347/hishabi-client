/* eslint-disable react/prop-types */
import { selectCurrentUser, selectIsLoading } from "@/features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const loading = useSelector(selectIsLoading);
  const user = useSelector(selectCurrentUser);

  // console.log(user);

  if (loading) {
    return (
      <div className="flex justify-center mt-[10%]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
