import styled from "styled-components";

export const PromoContainer = styled.div`
  background-color: var(--card-color2);
  color: #fff;
  margin: 2rem;
  border-radius: 0.7rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 0 5rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;

  h2 {
  }

  p {
  }
`;

export const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  padding: 1rem 0;
  border-radius: 0.5rem;

  input {
    width: 90%;
    border: 1px solid lightgray;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    text-align: center;
    font-size: 1rem;
    outline: none;
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
    padding: 0.5rem 1rem;

    input {
      width: 70%;
    }

    button {
      width: 30%;
      height: 100%;
      padding: 1rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  img {
    max-inline-size: 100%;
    block-size: auto;
  }
`;
