import styled from "styled-components";

export const CategoriesContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;

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

  @media (min-width: 768px) {
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    color: var(--dark-blue);
  }

  @media (min-width: 768px) {
  }
`;

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 1rem;

  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.7rem;
    background-color: var(--card-color2);
    box-shadow: var(--fixed-shadow);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      box-shadow: var(--elevated-shadow);
    }
  }

  h4 {
    color: var(--dark-blue);
  }

  p {
    color: var(--light-blue);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    .category {
      h4 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }
`;

// export const Category = styled.div``;
