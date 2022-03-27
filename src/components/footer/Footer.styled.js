import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

export const BrandWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .description {
    color: var(--dark-blue);
  }

  .social-links {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    justify-content: center;

    li {
      background-color: var(--red);
      padding: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      transition: var(--transition);

      svg {
        color: #fff;
        font-size: 1.3rem;
      }

      &:hover {
        background-color: #fff;
        svg {
          color: var(--red);
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;

  span {
    color: var(--dark-blue);
    font-size: 1.5rem;
    font-weight: bolder;
  }

  .dot {
    color: var(--ocean-blue);
  }
`;

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  text-align: left;

  .link {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      li {
        a {
          text-decoration: none;
          color: var(--light-blue);
        }
      }
    }
  }

  .title {
    color: var(--dark-blue);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
