import {
  HomeWrapper,
  Container,
  TitleWrapper,
  InputWrapper,
  Icon,
  ImageWrapper
} from "./Home.styled";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  return (
    <HomeWrapper className="home">
      <Container className="mx-3 py-3">
        <TitleWrapper>
          <h2>Browse thousands of products for your needs</h2>
          <InputWrapper>
            <input type="text" placeholder="I want to buy..." />
            <Icon>
              <BiSearch />
            </Icon>
          </InputWrapper>
        </TitleWrapper>
        <ImageWrapper>
          <img
            src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/home.png?raw=true"
            alt="Home"
          />
        </ImageWrapper>
      </Container>
    </HomeWrapper>
  );
}
