import styled from "styled-components";

export const HomeWrapper = styled.div`
  background-color: var(--blue-background);
  z-index: 1;

  @media (min-width: 768px) {
    margin: 2rem;
    border-radius: 1rem;
  }

  @media (min-width: 1200px) {
    margin: 0 5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 1rem;
    padding: 2rem 4rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  h2 {
    color: var(--dark-blue);
    text-transform: uppercase;
    text-align: center;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    h2 {
      font-size: 3rem;
    }
  }

  @media (min-width: 1200px) {
    h2 {
      text-align: start;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: var(--background);
  padding: 0.3rem 1rem;
  color: var(--dark-blue);
  width: 100%;
  border-radius: 1rem;

  input {
    outline: none;
    padding: 5px;
    color: var(--dark-blue);
    background-color: var(--background);
    font-size: 1rem;
    border: none;
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Icon = styled.div`
  display: flex;
  cursor: pointer;
  background-color: var(--ocean-blue);
  padding: 0.3rem;
  border-radius: 0.5rem;
  transition: var(--transition);

  &:hover {
    background-color: var(--dark-blue);
  }

  svg {
    color: #fff;
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
  }
`;

export const ImageWrapper = styled.div`
  img {
    max-inline-size: 100%;
    block-size: auto;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    img {
      height: 25rem;
      max-inline-size: none;
    }
  }
`;
