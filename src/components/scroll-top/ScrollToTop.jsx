import { useState } from "react";
import { ScrollToTopContainer } from "./ScrollToTop.styled";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <ScrollToTopContainer>
      <a href="#" className={`${visible ? "scroll-block" : "scroll-none"}`}>
        <FaChevronUp />
      </a>
    </ScrollToTopContainer>
  );
}
