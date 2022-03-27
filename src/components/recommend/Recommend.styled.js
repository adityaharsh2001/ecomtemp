import styled from "styled-components";

export const RecommendContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  .recommend {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    .category {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      img {
        max-inline-size: 100%;
        block-size: auto;
        height: 12rem;
        width: 100%;
        object-fit: cover;
      }

      h4 {
        text-align: center;
        color: var(--light-blue);
      }
    }
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
  @media (min-width: 768px) {
    .recommend {
      grid-template-columns: repeat(2, 1fr);
      .category {
        height: 20rem;
      }
    }
  }

  @media (min-width: 1200px) {
    .recommend {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const TitleContainer = styled.div`
  h2 {
    text-align: center;
    color: var(--dark-blue);
  }
`;
