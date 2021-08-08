import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: calc(100vh - 2rem);
  width: calc(100vw - 2rem);
  min-height: fit-content;
  scroll-snap-align: start;
  position: relative;

  ${(props) => props.dark && "background-color: #333;"}

  ${(props) =>
    props.backgroundImage
      ? `
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props.backgroundImage});
    ${props.parallax && `background-attachment: fixed;`}
  `
      : ``}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  transition: all 0.5s ease;
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
  top: 1rem;
  left: 1rem;
  bottom: 1rem;
  right: 1rem;
  color: ${(props) => (props.dark ? "#fff" : "#333")};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.blurred && "backdrop-filter: blur(5px)  brightness(0.8);"}

  &:before {
    content: "";
    opacity: 0;
    top: 0;
    left: 0;
    position: absolute;
    border-top: 2px solid ${(props) => (props.dark ? "#fff" : "#333")};
    border-right: 2px solid ${(props) => (props.dark ? "#fff" : "#333")};
    animation: ${(props) => !props.noBorder && borderAnimation} 2s forwards ease;
  }

  &:after {
    content: "";
    opacity: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    border-bottom: 2px solid ${(props) => (props.dark ? "#fff" : "#333")};
    border-left: 2px solid ${(props) => (props.dark ? "#fff" : "#333")};
    animation: ${(props) => !props.noBorder && borderAnimation} 2s 2s forwards
      ease;
  }
`;

const Section = ({
  dark,
  blurred,
  backgroundImage,
  parallax,
  children,
  noBorder,
}) => {
  return (
    <Container
      dark={dark}
      parallax={parallax}
      backgroundImage={backgroundImage}
    >
      <Wrapper noBorder={noBorder} blurred={blurred} dark={dark}>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Section;
