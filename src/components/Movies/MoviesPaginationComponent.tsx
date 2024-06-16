import { Link, useSearchParams } from "react-router-dom";

const MoviesPaginationComponent = () => {
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page");
  if (!page) {
    page = "1";
  }

  return (
    <ul>
      <li>
        {page == "1" ? "+" : "-"}
        <Link to={{ pathname: "/" }}>1</Link>
      </li>
      <li>
        {page == "2" ? "+" : "-"}
        <Link to={{ pathname: "/", search: "?page=2" }}>2</Link>
      </li>
      <li>
        {page == "3" ? "+" : "-"}
        <Link to={{ pathname: "/", search: "?page=3" }}>3</Link>
      </li>
      <li>
        {page == "4" ? "+" : "-"}
        <Link to={{ pathname: "/", search: "?page=4" }}>4</Link>
      </li>
      <li>
        {page == "5" ? "+" : "-"}
        <Link to={{ pathname: "/", search: "?page=5" }}>5</Link>
      </li>
      <li>
        {page == "6" ? "+" : "-"}
        <Link to={{ pathname: "/", search: "?page=6" }}>6</Link>
      </li>
    </ul>
  );
};

export default MoviesPaginationComponent;
