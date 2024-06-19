import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  page: number;
  currentPage: number;
}

const PaginationButtonComponent: FC<IProps> = ({ page, currentPage }) => {
  return (
    <>
      {page == currentPage ? (
        page
      ) : page == 1 ? (
        <Link to={{ pathname: "/" }}>{page}</Link>
      ) : (
        <Link to={{ pathname: "/", search: `?page=${page}` }}>{page}</Link>
      )}
    </>
  );
};

export default PaginationButtonComponent;
