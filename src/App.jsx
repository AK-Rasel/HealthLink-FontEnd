import { Outlet } from "react-router-dom";
import NavBar from "./Pages/Shared/NavBar";
import Container from "./SharedComponent/Container";
import Footer from "./Pages/Shared/Footer";

const App = () => {
  return (
    <div>
      <Container>
        <NavBar />
      </Container>

      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
