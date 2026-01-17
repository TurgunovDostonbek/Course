// style
import "./Navbar.css";

// Icons
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

    <div className="navbar__logos">
          <h1 className="navbar__logo--title">
            <a className="navbar__logo--link" href="">
              Turgunov...
            </a>
          </h1>
        </div>

      <div className="navbar__container container">
        <div className="navbar__menu">
          <a className="navbar__message--link" href="">
            <FaBars className="navbar__menu--icon bars__icon" />
          </a>
        </div>

        <div className="navbar__logo">
          <h1 className="navbar__logo--title">
            <a className="navbar__logo--link" href="">
              Turgunov...
            </a>
          </h1>
        </div>

        <div className="navbar__links">
          <ul className="navbar__links--items">
            <li className="navbar__items--item">
              <a className="navbar__item--link" href="">
                Documentatsiya
              </a>
            </li>
            <li className="navbar__items--item">
              <a className="navbar__item--link" href="">
                Components
              </a>
            </li>
            <li className="navbar__items--item">
              <a className="navbar__item--link" href="">
                Resurce
              </a>
            </li>
            <li className="navbar__items--item">
              <a className="navbar__item--link" href="">
                Homework
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__message">
          {/* <h3 className="navbar__message--title">Turgunov Dostonbek</h3> */}
          <a className="navbar__message--link" href="">
            <FaBook className="navbar__mesage--icon book__icon" />
          </a>
          <a className="navbar__message--link" href="">
            <FaGithub className="navbar__mesage--icon github__icon" />
          </a>
          <a className="navbar__message--link" href="">
            <FaInstagram className="navbar__mesage--icon instagram__icon" />
          </a>
          <a className="navbar__message--link" href="">
            <FaTelegram className="navbar__mesage--icon telegram__icon" />
          </a>
          <a className="navbar__message--link" href="">
            <FaLinkedin className="navbar__mesage--icon linkedin__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
