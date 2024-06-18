import { settingsActions } from "../../redux/slices/settingsSlice";
import { useAppDispatch } from "../../redux/store";

const HeaderComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(settingsActions.toggleThemeStyle())}>
        theme
      </button>
    </>
  );
};

export default HeaderComponent;
