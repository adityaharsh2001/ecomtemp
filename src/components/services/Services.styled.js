import styled from "styled-components";

export const ServicesContainer = styled.div``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  .service {
    background-color: var(--card-color);
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: var(--transition);
    text-align: center;
    cursor: pointer;
  }

  .service:hover {
    box-shadow: var(--elevated-shadow);
  }

  .two,
  .three {
    flex-direction: row;
  }

  .image-wrapper {
    img {
      max-inline-size: 100%;
      block-size: auto;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  p {
    color: var(--light-blue);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }

  svg {
    font-size: 1.4rem;
  }

  h4 {
    color: var(--dark-blue);
  }

  button {
    background-color: var(--blue);
    padding: 0.4rem 0.8rem;
    border-radius: 2rem;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .image-one {
    width: 250px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one one four"
      "two two three three";
    .service {
      &:nth-child(1) {
        grid-area: one;
      }
      &:nth-child(2) {
        grid-area: two;
      }
      &:nth-child(3) {
        grid-area: three;
      }
      &:nth-child(4) {
        grid-area: four;
      }
    }
  }

  @media (min-width: 1200px) {
    .service {
      h4 {
        font-size: 2rem;
      }
    }
  }
`;
