import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 300px;
  filter: invert(1);
  mix-blend-mode: lighten;
`;

const Heading = styled.h1`
  text-align: center;
  font-family: "Montserrat-Regular";
  font-size: 2.5rem;
`;

const Header = ({ logo, heading, button, social }) => (
  <Container>
    {logo && <Logo src={logo.src} alt={logo.alt} />}
    {heading && <Heading>{heading}</Heading>}
  </Container>
);

export default Header;
