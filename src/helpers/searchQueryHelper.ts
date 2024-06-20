interface ISearchQueryProps {
  page: number;
  genres: number[];
}

export const generateSearchQuery = ({ page, genres }: ISearchQueryProps) => {
  let search = "";
  if (genres.length > 0) {
    search = `genres=${JSON.stringify(genres)}`;
  }

  if (page != 1) {
    if (search) {
      search += "&";
    }
    search += `page=${page}`;
  }

  if (search) {
    search = "?" + search;
  }

  return search;
};
