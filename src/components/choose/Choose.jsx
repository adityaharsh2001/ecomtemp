import {
  ChooseSection,
  Container,
  Content,
  TitleContainer
} from "./Choose.styled";
import { chooseData } from "./chooseData";

export default function Choose() {
  return (
    <ChooseSection className="choose-us-container mx-3 py-3">
      <Container>
        <TitleContainer>
          <h2>Why choose us over others? </h2>
          <p>
            Many reasons why customers choose us than other ecommerce. We have
            some plus points that others don't have.
          </p>
        </TitleContainer>
        <Content>
          <div className="choose-us">
            {chooseData.map((choice) => (
              <div className="choose" key={choice.id}>
                <img src={choice.image} alt={choice.title} />
                <h4>{choice.title}</h4>
                <p>{choice.description}</p>
              </div>
            ))}
          </div>
          <div className="delivery">
            <img
              src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/choose.png?raw=true"
              alt="delivery"
            />
          </div>
        </Content>
      </Container>
    </ChooseSection>
  );
}
