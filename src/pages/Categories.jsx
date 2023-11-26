import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <p
        style={{
          color: "orange",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
        }}>
        This section of the webpage is still in the works!
      </p>
      <span style={{ display: "block", marginTop: "2rem" }}>
        Back to{" "}
        <Link to='/' style={{ textDecoration: "underline" }}>
          Home Page
        </Link>
      </span>
    </div>
  );
};

export default Categories;
