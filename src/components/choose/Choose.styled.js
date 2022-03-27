import styled from "styled-components";

export const ChooseSection = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  h2 {
    color: var(--dark-blue);
  }

  p {
    color: var(--light-blue);
    letter-spacing: 0.1rem;
    line-height: 1.2rem;
  }

  @media (min-width: 768px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .choose-us {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    .choose {
      background-color: var(--card-color2);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 0.7rem;
      box-shadow: var(--fixed-shadow);
      transition: var(--transition);

      &:hover {
        box-shadow: var(--elevated-shadow);
      }

      h4 {
        color: var(--dark-blue);
      }

      p {
        color: var(--light-blue);
      }
    }
  }

  .delivery {
    display: flex;
    justify-content: center;

    img {
      max-inline-size: 100%;
      block-size: auto;
    }
  }

  @media (min-width: 768px) {
    .choose-us {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    gap: 12rem;

    .choose-us {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
