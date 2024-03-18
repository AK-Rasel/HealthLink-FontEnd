import Container from "../../SharedComponent/Container";
import Banner from "./Banner/Banner";
import PopularMedicalCamps from "./PopularMedicalCamps/PopularMedicalCamps";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularMedicalCamps />
      <Container>
        <Testimonials />
      </Container>
    </div>
  );
};

export default Home;
