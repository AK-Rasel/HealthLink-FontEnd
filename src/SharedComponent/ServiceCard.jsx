import hart from "../assets/Card/Hart.jpeg";
const ServiceCard = () => {
  return (
    <div className="card  lg:card-side bg-base-100 shadow-xl gap-0">
      <figure>
        <img className="object-fill basis-1/4 h-fit " src={hart} alt="Album" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title ">Heart Health awareness camp</h2>
        <p>
          <span className="font-bold">Specialized Services Provided:</span>{" "}
          cardiac screenings,cardiac screenings,cardiac screenings,
        </p>
        <p>
          <span className="font-bold">Target Audience:</span> individuals aged
          40 and above
        </p>
        <p>
          <span className="font-bold">Scheduled Date and Time:</span> april 15,
          2024, 9:00 am - 4:00 pm
        </p>
        <p>
          {" "}
          <span className="font-bold">Location:</span>
          city hospital, 123 main street, anytown, usa
        </p>
        <p>
          <span className="font-bold"> Camp Fees:</span>$20 per person
        </p>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
