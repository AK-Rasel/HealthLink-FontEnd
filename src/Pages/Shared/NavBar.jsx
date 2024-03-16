import { Link } from "react-router-dom";

const NavBar = () => {
  const NavigationRouter = (
    <>
      <Link className="ml-2" to={"/"}>
        Home
      </Link>

      <Link className="ml-2" to={"/"}>
        Available Camps
      </Link>

      <Link className="ml-2" to={"/"}>
        Dashboard
      </Link>

      <Link className="ml-2" to={"/"}>
        Contact Us
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* bargar button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* small display */}
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4 font-semibold text-base "
          >
            {NavigationRouter}
          </div>
        </div>
        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
          <span className="font-bold">Health</span>Link
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* lag display */}
        <div className="menu menu-horizontal px-1 gap-5 font-semibold text-lg">
          {NavigationRouter}
        </div>
      </div>
      <div className="navbar-end gap-4 font-semibold text-xl ">
        <button>Register</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default NavBar;
