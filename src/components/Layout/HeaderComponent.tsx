import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateSearchQuery } from "../../helpers/searchQueryHelper";
import { settingsActions } from "../../redux/slices/settingsSlice";
import { userActions } from "../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const { searchPhrase } = useAppSelector((state) => state.moviesSlice);
  const { name, avatar } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.generateUser());
  }, []);

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
      <img className="avatar" width="80px" src={avatar} alt="avatar" />
      {name}
      <button onClick={() => dispatch(settingsActions.toggleThemeStyle())}>
        theme
      </button>
    </>
  );
};

export default HeaderComponent;
