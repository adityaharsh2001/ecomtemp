import {
  CategoriesContainer,
  CategoriesWrapper,
  Container,
  TitleWrapper
} from "./Categories.styled";
import { categories } from "./categorieData";

export default function Categories() {
  return (
    <CategoriesContainer className="categories-container mx-3 py-3">
      <Container>
        <TitleWrapper>
          <h2>Categories</h2>
        </TitleWrapper>
        <CategoriesWrapper>
          {categories.map((cat) => (
            <div className="category" key={cat.id}>
              <img src={cat.image} alt={cat.title} />
              <h4>{cat.title}</h4>
              <p>{cat.description}</p>
            </div>
          ))}
        </CategoriesWrapper>
        <button>Show All</button>
      </Container>
    </CategoriesContainer>
  );
}
