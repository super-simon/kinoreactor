import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  page: number;
}

const PaginationButtonComponent: FC<IProps> = ({ page }) => {
  return (
    <>
      {" "}
      {page == 1 ? (
        <Link to={{ pathname: "/" }}>{page}</Link>
      ) : (
        <Link to={{ pathname: "/", search: `?page=${page}` }}>{page}</Link>
      )}
    </>
  );
};

export default PaginationButtonComponent;
