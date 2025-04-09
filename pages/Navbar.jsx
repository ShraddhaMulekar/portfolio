import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-scroll";
import styled from "styled-components";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = ()=>{
    setMenuOpen(false)
  }
  return (
    <DIV>
      <nav>
        <h1 className="head">Shraddha</h1>

        <div className={`nav_container ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link className="option" to="home" smooth={true} duration={500} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="option" to="about" smooth={true} duration={500} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link className="option" to="skill" smooth={true} duration={500} onClick={closeMenu}>
                Skill
              </Link>
            </li>
            <li>
              <Link
                className="option"
                to="project"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="option"
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="resume_li" onClick={closeMenu}>
              <a href="\Resume1.pdf" download="Resume.pdf">
                Resume <IoMdDownload className="download_icon" />
              </a>
            </li>
          </ul>
        </div>
        <span className="nav_menu_span" onClick={handleMenu}>
          <FiMenu className="nav_menu" />
        </span>
      </nav>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  position: fixed;
  width: 100%;
  /* border: solid pink; */
  top: 0;
  left: 0;
  z-index: 1000;
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #292828;
    /* border-bottom: 1px solid lightgray; */
    padding: 50px 120px;
  }
  .nav_menu_span {
    display: none;
    width: 50px;

    background: none;
  }
  .nav_menu {
    background: none;
    width: 100%;
    font-size: 40px;
  }
  .head {
    width: 10%;
    text-align: end;
    /* border: solid purple; */
    margin-bottom: -30px;
    background: none;
  }
  .nav_container {
    width: 65%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    /* border: solid yellow; */
    margin-top: -40px;
    background: none;
  }
  .option {
    background: none;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    padding: 10px;
    /* border: solid green; */
    background: none;
  }
  li {
    list-style-type: none;
    /* border: solid red; */
    background: none;
    cursor: pointer;
  }
  li Link {
    background: none;
  }

  .resume_li {
    width: 90px;
    display: flex;
  }
  .resume_li a {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: none;
  }
  .download_icon {
    width: 20px;
    height: 20px;
    background: none;
  }

  /* responsive */
  @media (max-width: 769px) {
    width: 100%;
    /* padding: -40px 0px; */
    nav {
      padding: 30px ;
    }
    .nav_menu_span {
      display: block;
    }
    .nav_container {
      display: none;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }
    .nav_container.open {
      display: flex;
    }
    ul {
      width: 20%;
      height: 55vh;
      flex-direction: column;
      align-items: center;
      position: absolute;
      /* border: solid red; */
      top: 105px;
      right: 0;
      background: #3e3d3d;
      z-index: 1000;
      font-weight: bold;
    }

    li {
      width: 100%;
      text-align: center;
    }
    .nav_menu {
      /* border: solid; */
    }
    .resume_li a {
      display: flex;
      align-items: center;
      /* padding: 10px; */
      font-size: 15px;
    }
  }

  @media (max-width: 456px) {
    width: 100%;
    nav {
      padding: 30px;
    }
    ul {
      width: 40%;
    }
  }
`;
