import bannerImage from "../../../assets/Banner/Bnner.png";
import loveIcon from "../../../assets/Banner/png-clipart-music-industry-business-medicine-health-business-love-text.png";
import { CiFaceSmile } from "react-icons/ci";

const Banner = () => {
  return (
    <section className=" bg-secondary-color">
      <div className="max-w-7xl mx-auto  flex lg:flex-row flex-col-reverse justify-between items-center pt-5 px-4 lg:px-0 gap-5 ">
        <div className="flex-1 text-center lg:text-left font-poppins space-y-3">
          <h2 className="font-semibold text-quaternary-color">
            FOR BETTER HEALTHCARE
          </h2>
          <h1 className=" font-bold text-4xl lg:text-6xl">
            Quality Healthcare <br /> Solution for all
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eum cumque fuga voluptatum quaerat id, sunt expedita. Esse, ad alias
            nesciunt fugiat labore minus officia, quae porro, reprehenderit
            perferendis omnis.
          </p>
          <button className="btn bg-primary-color text-white hover:bg-tertiary-color">
            Our Services
          </button>

          <div className="flex flex-col md:flex-row lg:justify-start justify-center gap-4">
            <div className="flex justify-center   items-center gap-4 ">
              <img className="w-20" src={loveIcon} alt="icon" />
              <div>
                <p>265k+</p>
                <p>Recovered Patients</p>
              </div>
            </div>
            <div className="flex justify-center lg:flex-row lg:justify-start  items-center gap-4 ">
              <CiFaceSmile className="w-20 text-7xl " />
              <div>
                <p>265k+</p>
                <p>Recovered Patients</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="flex-1 lg:w-1/2 w-3/4 md:w-2/3"
          src={bannerImage}
          alt="Banner"
        />
      </div>
    </section>
  );
};

export default Banner;
