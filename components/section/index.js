import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: calc(100vh - 4rem);
  width: calc(100vw - 4rem);
  scroll-snap-align: start;
  position: relative;

  ${(props) =>
    props.backgroundImage
      ? `
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props.backgroundImage});
  `
      : ``}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const borderAnimation = keyframes`
  0% {
    opacity: 1;
    width: 0%;
    height: 0%;
  }

  50% {
    width: calc(100% - 2px);
    height: 0%;
  }

  100% {
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  bottom: 2rem;
  right: 2rem;
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    opacity: 0;
    top: 0;
    left: 0;
    position: absolute;
    border-top: 2px solid ${(props) => (props.dark ? "#fff" : "#000")};
    border-right: 2px solid ${(props) => (props.dark ? "#fff" : "#000")};
    animation: ${borderAnimation} 2s forwards ease;
  }

  &:after {
    content: "";
    opacity: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    border-bottom: 2px solid ${(props) => (props.dark ? "#fff" : "#000")};
    border-left: 2px solid ${(props) => (props.dark ? "#fff" : "#000")};
    animation: ${borderAnimation} 2s 2s forwards ease;
  }
`;

const Section = ({ dark, border, backgroundImage, children }) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <Wrapper dark={dark}>{children}</Wrapper>
    </Container>
  );
};

export default Section;
