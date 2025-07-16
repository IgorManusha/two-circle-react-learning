import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link style={{ color: "orange" }} to="/">
        Press go to home page
      </Link>
    </div>
  );
};

export default NotFound;
