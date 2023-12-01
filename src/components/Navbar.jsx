import { Navbar } from "reactstrap";
import "../components/Nav.css";
function NavigationBar() {
  const heroContainerStyle = {
    marginBottom: "50px", // Make sure to specify a valid CSS unit (e.g., "px")
  };
  return (
    <header
      id="header"
      className="fixed-top header-transparent"
      style={heroContainerStyle}
    >
      <div className="container d-flex align-items-center justify-content-between position-relative">
        <div className="logo">
          <h1 className="text-light">
            <a>
              <span>SilentVox</span>
            </a>
          </h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#about">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/Auth">
                Login
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/Auth">
                Sign-Up
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="mailto:SilentVox@gmail.com"
              >
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}
export default NavigationBar;
