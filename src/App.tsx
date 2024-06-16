import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/Layout/HeaderComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
}

export default App;
