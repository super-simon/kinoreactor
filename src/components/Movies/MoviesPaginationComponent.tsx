import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import PaginationButtonComponent from "../Pagination/PaginationButtonComponent";
import "./MoviesPaginationComponent.css";

const MoviesPaginationComponent = () => {
  const { page, totalPages } = useAppSelector((state) => state.moviesSlice);

  let firstRangeLength: number,
    firstRange: number[],
    lastRangeLength: number,
    lastRange: number[],
    middleRangeStart: number,
    middleRangeEnd: number;
  let middleRange: number[] = [];

  if (totalPages && page) {
    console.log(totalPages);
    firstRangeLength = totalPages && totalPages >= 5 ? 5 : totalPages;
    if ((page == 4 || page == 5) && totalPages >= 6) {
      firstRangeLength = 6;
    }

    if (page == 5 && totalPages >= 7) {
      firstRangeLength = 7;
    }

    if (page == 6 && totalPages >= 8) {
      firstRangeLength = 8;
    }

    if (page == 7 && totalPages >= 9) {
      firstRangeLength = 9;
    }

    firstRange = firstRangeLength
      ? [...Array.from({ length: firstRangeLength }, (_, i) => i + 1)]
      : [];

    lastRangeLength =
      totalPages && totalPages >= firstRangeLength + 5
        ? 5
        : +totalPages - firstRangeLength;

    if (
      (page == totalPages - 3 || page == totalPages - 4) &&
      totalPages - firstRangeLength >= 6
    ) {
      lastRangeLength = 6;
    }

    if (page == totalPages - 4 && totalPages - firstRangeLength >= 7) {
      lastRangeLength = 7;
    }

    if (page == totalPages - 5 && totalPages - firstRangeLength >= 8) {
      lastRangeLength = 8;
    }

    if (page == totalPages - 6 && totalPages - firstRangeLength >= 9) {
      lastRangeLength = 9;
    }

    lastRange = lastRangeLength
      ? [
          ...Array.from(
            { length: lastRangeLength },
            (_, i) => i + totalPages - lastRangeLength + 1
          ),
        ]
      : [];

    if (firstRangeLength < page && totalPages - lastRangeLength > page) {
      console.log("middle range");
      middleRangeStart = page - 2;
      if (firstRangeLength > middleRangeStart) {
        middleRangeStart = firstRangeLength + 1;
      }

      middleRangeEnd = page + 2;
      if (totalPages - lastRangeLength < middleRangeEnd) {
        middleRangeEnd = totalPages - lastRangeLength - 1;
      }

      middleRange = [
        ...Array.from(
          { length: middleRangeEnd - middleRangeStart + 1 },
          (_, i) => i + middleRangeStart
        ),
      ];
    }
  } else {
    firstRange = [];
    lastRange = [];
    middleRange = [];
  }

  console.log(middleRange, middleRange.length);

  return (
    <>
      {page && totalPages && (
        <ul className="paginationList">
          {page && +page > 1 && (
            <li>
              <Link to={{ pathname: "/" }}>{"<<"}</Link>
            </li>
          )}
          {page && +page > 2 && (
            <li>
              <Link to={{ pathname: "/", search: `?page=${page - 1}` }}>
                {"<"}
              </Link>
            </li>
          )}

          {firstRange.map((p) => (
            <li key={p}>
              <PaginationButtonComponent page={p} currentPage={page} />
            </li>
          ))}

          {middleRange.length == 0 && <li>...</li>}

          {middleRange.length > 0 &&
            middleRange[0] != firstRange[firstRange.length - 1] + 1 && (
              <li>...</li>
            )}

          {middleRange.map((p) => (
            <li key={p}>
              <PaginationButtonComponent page={p} currentPage={page} />
            </li>
          ))}

          {middleRange.length > 0 &&
            middleRange[middleRange.length - 1] != lastRange[0] - 1 && (
              <li>...</li>
            )}

          {lastRange.map((p) => (
            <li key={p}>
              <PaginationButtonComponent page={p} currentPage={page} />
            </li>
          ))}

          {page && +page < +totalPages - 1 && (
            <li>
              <Link to={{ pathname: "/", search: `?page=${page + 1}` }}>
                {">"}
              </Link>
            </li>
          )}
          {page && +page < totalPages && (
            <li>
              <Link to={{ pathname: "/" }}>{">>"}</Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default MoviesPaginationComponent;
