import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import PaginationButtonComponent from "../Pagination/PaginationButtonComponent";
import "./MoviesPaginationComponent.css";

const MoviesPaginationComponent = () => {
  // const [searchParams] = useSearchParams();
  // let page = searchParams.get("page");
  // if (!page) {
  //   page = "1";
  // }
  const { page, totalPages } = useAppSelector((state) => state.moviesSlice);

  let firstRangeLength = totalPages && totalPages >= 5 ? 5 : totalPages;
  if (page && (page == 4 || page == 5) && totalPages && totalPages >= 6) {
    firstRangeLength = 6;
  }

  if (page && page == 5 && totalPages && totalPages >= 7) {
    firstRangeLength = 7;
  }

  if (page && page == 6 && totalPages && totalPages >= 8) {
    firstRangeLength = 8;
  }

  if (page && page == 7 && totalPages && totalPages >= 9) {
    firstRangeLength = 9;
  }

  const firstRange = firstRangeLength
    ? [...Array.from({ length: firstRangeLength }, (_, i) => i + 1)]
    : [];

  console.log(firstRange, [...Array(firstRange)]);
  return (
    <ul className="paginationList">
      {page && +page > 1 && (
        <li>
          <Link to={{ pathname: "/" }}>{"<<"}</Link>
        </li>
      )}
      {page && +page > 2 && (
        <li>
          <Link to={{ pathname: "/", search: `?page=${page - 1}` }}>{"<"}</Link>
        </li>
      )}

      {firstRange.map((p) => (
        <li key={p}>
          <PaginationButtonComponent page={p} />
        </li>
      ))}

      {page && totalPages && +page < +totalPages - 1 && (
        <li>
          <Link to={{ pathname: "/", search: `?page=${page + 1}` }}>{">"}</Link>
        </li>
      )}
      {page && totalPages && +page < totalPages && (
        <li>
          <Link to={{ pathname: "/" }}>{">>"}</Link>
        </li>
      )}
    </ul>
  );
};

export default MoviesPaginationComponent;
