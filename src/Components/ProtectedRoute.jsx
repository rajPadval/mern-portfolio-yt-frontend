import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element }) => {
  const auth = useSelector((state) => state.auth.isLoggedIn);

  return !auth ? <Navigate to="/login" /> : element;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
