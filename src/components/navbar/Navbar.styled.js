import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--blue-background);
  transition: var(--transition);

  @media (min-width: 1200px) {
    background-color: var(--background);
    margin: 2rem;
    margin-top: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .py-3 {
    padding: 2rem 0;
  }

  @media (min-width: 1200px) {
    .py-3 {
      padding: 1rem 0;
    }
  }
`;

export const Brand = styled.div`
  display: flex;

  span {
    color: var(--dark-blue);
    font-family: "Permanent Marker", cursive;
    font-size: 1.5rem;
    font-weight: bolder;
    letter-spacing: 1px;
    cursor: pointer;
  }
  .dot {
    color: var(--ocean-blue);
  }
`;

export const LinksContainer = styled.div``;

export const Links = styled.div`
  width: ${({ navOpen }) => (navOpen ? "60vw" : "0vw")};
  visibility: ${({ navOpen }) => (navOpen ? "visible" : "hidden")};
  opacity: ${({ navOpen }) => (navOpen ? "1" : "0")};
  position: fixed;
  background-color: var(--background);
  height: 100vh;
  top: 0;
  right: 0;
  transition: var(--transition);

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--light-blue);
    font-weight: bold;
    transition: var(--transition);

    &:hover {
      color: var(--dark-blue);
    }
  }
  .sun {
    color: yellow;
    font-size: 1.4rem;
  }

  .moon {
    color: blue;
    font-size: 1.4rem;
  }

  .color-mode {
    display: none;
  }

  @media (min-width: 1200px) {
    position: initial;
    height: max-content;
    visibility: visible;
    opacity: 1;
    width: 100%;

    ul {
      height: 1rem;
      flex-direction: row;

      .color-mode {
        display: block;
      }
    }
  }
`;

export const Toggle = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row-reverse;
  position: relative;
  z-index: 1;
  cursor: pointer;

  svg {
    color: var(--svg-color);
    font-size: 1.4rem;
  }

  .sun {
    color: yellow;
    font-size: 1.4rem;
  }

  .moon {
    color: blue;
    font-size: 1.4rem;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
