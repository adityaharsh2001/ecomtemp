import {
  Container,
  RecommendContainer,
  TitleContainer
} from "./Recommend.styled";
import { recommendData } from "./recommendData";

export default function Recommend() {
  return (
    <RecommendContainer className="recommend-container mx-3 py-3">
      <Container>
        <TitleContainer>
          <h2>Recommended for You</h2>
        </TitleContainer>
        <div className="recommend">
          {recommendData.map((item, index) => {
            return (
              <div className="category" key={index}>
                <img src={item.image} alt={item.text} />
                <h4>{item.text}</h4>
              </div>
            );
          })}
        </div>
        <button>Show All</button>
      </Container>
    </RecommendContainer>
  );
}
