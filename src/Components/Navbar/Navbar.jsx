import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" />
        <img src={menu_open} onClick={openMenu} alt="menu" className="nav-mob-open"/>

        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="close" className="nav-mob-close"/>
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={700}
              onClick={() => setMenu("home")}
            >
              Home
            </Link>
            <p>
              {menu === "home" ? (
                <img src={underline} alt="underline" />
              ) : (
                <></>
              )}
            </p>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={700}
              offset={-80}
              onClick={() => setMenu("about")}
            >
              About
            </Link>
            {menu === "about" ? <img src={underline} alt="underline" /> : <></>}
          </li>
          <li>
            <Link
              to="mywork"
              smooth={true}
              duration={700}
              offset={-80}
              onClick={() => setMenu("mywork")}
            >
              Projects
            </Link>
            <p>
              {menu === "mywork" ? (
                <img src={underline} alt="underline" />
              ) : (
                <></>
              )}
            </p>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-80}
              onClick={() => setMenu("contact")}
            >
              Contact
            </Link>
            <p>
              {menu === "contact" ? (
                <img src={underline} alt="underline" />
              ) : (
                <></>
              )}
            </p>
          </li>
        </ul>

        <div className="nav-connect">
          {" "}
          <Link to="contact" smooth={true} duration={700} offset={-80}>
            Contact With Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
