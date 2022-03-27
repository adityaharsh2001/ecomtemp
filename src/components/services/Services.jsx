import { Container, ServicesContainer } from "./Services.styled";
import { HiArrowSmRight } from "react-icons/hi";

export default function Services() {
  return (
    <ServicesContainer className="services-container mx-3 py-3">
      <Container>
        <div className="service one">
          <p>Weekly Deals</p>
          <h4>Free Delivery</h4>
          <button>Learn More</button>
          <div className="image-wrapper">
            <img
              className="image-one"
              src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/service1.png?raw=true"
              alt="service1"
            />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Discount up to 25%</h4>
            <p>
              Learn More <HiArrowSmRight />
            </p>
          </div>
          <div className="image-wrapper">
            <img
              src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/service2.png?raw=true"
              alt="service2"
            />
          </div>
        </div>
        <div className="service three">
          <div className="image-wrapper">
            <img
              src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/service3.png?raw=true"
              alt="service3"
            />
          </div>
          <div className="content">
            <h4>Free 5GB Data</h4>
            <p>
              Learn More <HiArrowSmRight />
            </p>
          </div>
        </div>

        <div className="service four">
          <p>Tesarac monthly deals</p>
          <h4>Free delivery</h4>
          <p>
            Learn More <HiArrowSmRight />
          </p>
          <div className="image-wrapper">
            <img
              src="https://github.com/koolkishan/react-ecommerce/blob/master/src/assets/service4.png?raw=true"
              alt="service4"
            />
          </div>
        </div>
      </Container>
    </ServicesContainer>
  );
}
