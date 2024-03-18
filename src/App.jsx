import { Outlet } from "react-router-dom";
import NavBar from "./Pages/Shared/NavBar";
import Container from "./SharedComponete/Container";

const App = () => {
  return (
    <div>
      <Container>
        <NavBar />
      </Container>

      <Outlet />
    </div>
  );
};

export default App;
