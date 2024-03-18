import Container from "../../SharedComponent/Container";

const Footer = () => {
  return (
    <footer className=" bg-secondary-color font-plus_Jakarta_Sans ">
      <div className="max-w-7xl mx-auto footer p-10 text-base-content  text-xl leading-8 gap-10 justify-between">
        <nav className="flex items-center h-full ">
          <h2 className="text-4xl">
            <span className="font-bold">Health</span>Link
          </h2>
        </nav>
        <nav className="font-medium ">
          <h6 className="footer-title text-2xl">Company</h6>
          <a className="link link-hover ">Home</a>
          <a className="link link-hover"> Available Camps</a>
          <a className="link link-hover">Dashboard</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav className="font-medium ">
          <h6 className="footer-title text-2xl">Contact info</h6>
          <p className="link link-hover ">
            256/A, Central Park Avenue, <br />
            Main Town, New York City
          </p>
          <p className="link link-hover"> healthlink@gmail.com</p>
          <p className="link link-hover">www.healthlink.com</p>
          <p className="link link-hover">+12345678910</p>
          <p className="link link-hover">+12345678910</p>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
