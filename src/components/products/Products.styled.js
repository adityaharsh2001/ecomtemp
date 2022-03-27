import styled from "styled-components";

export const ProductsSection = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h2 {
    color: var(--dark-blue);
  }

  button {
    padding: 0.8rem 2rem;
    border-radius: 2rem;
    background-color: var(--background);
    color: var(--dark-blue);
    border: 0.1rem solid var(--blue);
    font-weight: bolder;
    cursor: pointer;
    font-size: 14px;
    transition: var(--transition);

    &:hover {
      background-color: var(--dark-blue);
      color: var(--background);
      border-color: var(--background);
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 5rem;
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1rf;
  gap: 2rem;

  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: var(--card-color2);
    padding: 1rem;
    border-radius: 0.5rem;

    img {
      max-inline-size: 100%;
      block-size: auto;
      /* height: 10rem; */
    }

    h4 {
      color: var(--dark-blue);
    }

    hr {
      height: 0.2rem;
      width: 80%;
      background-color: var(--dark-blue);
    }

    svg {
      color: var(--ocean-blue);
      font-size: 2rem;
    }
  }

  .image {
  }

  .processor,
  .os {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      color: var(--light-blue);
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
