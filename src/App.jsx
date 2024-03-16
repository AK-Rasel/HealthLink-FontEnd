import { Outlet } from "react-router-dom";
import NavBar from "./Pages/Shared/NavBar";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
