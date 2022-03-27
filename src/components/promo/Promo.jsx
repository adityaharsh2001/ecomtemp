import {
  Container,
  Content,
  ImageWrapper,
  PromoContainer,
  SubscribeWrapper,
  TitleWrapper
} from "./Promo.styled";

export default function Promo() {
  return (
    <PromoContainer className="promo-container">
      <Container className="mx-3 py-3">
        <Content>
          <TitleWrapper>
            <h2>Never Miss a Promo</h2>
            <p>
              We always give our customersa promo for being loyal to us. Just
              subscribe!
            </p>
          </TitleWrapper>
          <SubscribeWrapper>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </SubscribeWrapper>
        </Content>
        <ImageWrapper>
          <img
            src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/promo.png?raw=true"
            alt="promo"
          />
        </ImageWrapper>
      </Container>
    </PromoContainer>
  );
}
