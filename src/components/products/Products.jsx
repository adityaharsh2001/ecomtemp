import {
  ProductsSection,
  Container,
  TitleContainer,
  ProductContainer
} from "./Products.styled";
import { BsChevronDown } from "react-icons/bs";
import { products } from "./productData";

export default function Products() {
  return (
    <ProductsSection className="products-container mx-3 py-3">
      <Container>
        <TitleContainer>
          <h2>Compare the Product</h2>
          <button>New Comparison</button>
        </TitleContainer>
        <ProductContainer>
          {products.map((product, index) => {
            return (
              <div key={index} className="product">
                <div className="image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h4>{product.name}</h4>
                <h4>{product.model}</h4>
                <hr />
                <div className="processor">
                  <img
                    src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/processor.png?raw=true"
                    alt="processor"
                  />
                  <h4>Processor</h4>
                  <p>{product.processor}</p>
                </div>
                <div className="os">
                  <img
                    src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/os.png?raw=true"
                    alt="os"
                  />
                  <h4>Operating System</h4>
                  <p>{product.os}</p>
                </div>
                <BsChevronDown />
              </div>
            );
          })}
        </ProductContainer>
      </Container>
    </ProductsSection>
  );
}
