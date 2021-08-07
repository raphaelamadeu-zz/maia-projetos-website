import styled from "styled-components";
import AnchorButton from "../anchor-button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > a {
    align-self: center;
  }
`;

const Logo = styled.img`
  width: 300px;
  filter: invert(1);
  mix-blend-mode: lighten;
`;

const Heading = styled.h1`
  text-align: center;
  font-family: "Montserrat-Regular";
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Header = ({ logo, heading, button, social }) => (
  <Container>
    {logo && <Logo src={logo.src} alt={logo.alt} />}
    {heading && <Heading>{heading}</Heading>}
    {button && (
      <AnchorButton dark href={button.href}>
        {button.copy}
      </AnchorButton>
    )}
  </Container>
);

export default Header;
