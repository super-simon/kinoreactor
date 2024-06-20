import { useNavigate } from "react-router-dom";
import { generateSearchQuery } from "../../helpers/searchQueryHelper";
import { settingsActions } from "../../redux/slices/settingsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const HeaderComponent = () => {
  const { searchPhrase } = useAppSelector((state) => state.moviesSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <input
        type="text"
        onChange={(e) =>
          navigate(
            generateSearchQuery({
              page: 1,
              genres: [],
              search: e.target.value,
            })
          )
        }
        value={searchPhrase}
        placeholder="search"
      />
      <button onClick={() => dispatch(settingsActions.toggleThemeStyle())}>
        theme
      </button>
    </>
  );
};

export default HeaderComponent;
