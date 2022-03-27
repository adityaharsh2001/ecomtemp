import { footerData, socialLinks } from "./footerData";
import {
  Brand,
  BrandWrapper,
  FooterContainer,
  LinksWrapper
} from "./Footer.styled";

export default function Footer() {
  return (
    <FooterContainer className="footer mx-3 py-3">
      <BrandWrapper>
        <Brand>
          <span>Tesarac</span>
          <span className="dot"></span>
        </Brand>
        <p className="description">
          Build a modern and creative website with TesaracBuilder.
        </p>
        <ul className="social-links">
          {socialLinks.map((link, index) => {
            return <li key={index}>{link}</li>;
          })}
        </ul>
      </BrandWrapper>
      <LinksWrapper>
        {footerData.map((item, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{item.type}</h3>
              <ul>
                {item.subTypes.map((sub, indexSub) => {
                  return (
                    <li key={indexSub}>
                      <a href="#">{sub}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </LinksWrapper>
    </FooterContainer>
  );
}
