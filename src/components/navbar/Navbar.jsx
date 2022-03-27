import { useState } from "react";
import {
  Container,
  Nav,
  Brand,
  Links,
  Toggle,
  LinksContainer
} from "./Navbar.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navOpen, setNavOpen] = useState(false);

  const html = document.querySelector("html");

  const toggleNav = (e) => {
    e.stopPropagation();
    setNavOpen((prevNavState) => !prevNavState);
  };

  html.addEventListener("click", () => setNavOpen(false));
  return (
    <Nav className="nav">
      <Container className="py-3 mx-3">
        <Brand>
          <span>Tesarac</span>
          <div className="dot">.</div>
        </Brand>
        <LinksContainer onClick={(e) => e.stopPropagation()}>
          <Toggle>
            {navOpen ? (
              <MdClose onClick={toggleNav} />
            ) : (
              <GiHamburgerMenu onClick={toggleNav} />
            )}
            <div onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          </Toggle>

          <Links navOpen={navOpen}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li onClick={changeTheme} className="color-mode">
                {currentTheme === "dark" ? (
                  <ImSun className="sun" />
                ) : (
                  <BsFillMoonFill className="moon" />
                )}
              </li>
            </ul>
          </Links>
        </LinksContainer>
      </Container>
    </Nav>
  );
}
