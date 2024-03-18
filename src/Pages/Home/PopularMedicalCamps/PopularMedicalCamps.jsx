import Container from "../../../SharedComponent/Container";
import ServiceCard from "../../../SharedComponent/ServiceCard";

const PopularMedicalCamps = () => {
  return (
    <section>
      <div className="text-center font-plus_Jakarta_Sans my-12">
        <h2 className="text-xl font-medium">Top Services</h2>
        <h1 className="font-bold text-4xl ">Our Popular Medical </h1>
        <div className="divider w-96 mx-auto divider-primary"></div>
      </div>
      <Container>
        <div className="grid grid-cols-2 gap-3">
          <ServiceCard />
          <ServiceCard />
        </div>
      </Container>
    </section>
  );
};

export default PopularMedicalCamps;
