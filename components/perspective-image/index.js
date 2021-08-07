import styled, { keyframes } from "styled-components";

const hovering = keyframes`
  0% {
    margin-top: 0;
    box-shadow: -2rem 2rem 10px rgba(0, 0, 0, 0.5);
  }

  50% {
    margin-top: -10%;
    box-shadow: -3.5rem 3.5rem 15px 10px rgba(0, 0, 0, 0.5);
  }

  100% {
    margin-top: 0;
    box-shadow: -2rem 2rem 10px rgba(0, 0, 0, 0.5);
  }
`;

const hoveringImg = keyframes`
  0% {
    margin-top: 0;
    margin-left: 0;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
  }

  50% {
    margin-top: -5%;
    margin-left: 5%;
    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.5);
  }

  100% {
    margin-top: 0;
    margin-left: 0;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
  }
`;

const Container = styled.div`
  position: absolute;
  left: 25%;
  width: 50%;
  position: relative;
  background: #333;
  transition: all 1.5s ease;
  transform: rotate(-20deg) skew(20deg);
  animation: ${hovering} 5s infinite ease-in-out;

  &::after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Perspective = styled.div`
  &::after {
    content: "";
    height: 2rem;
    background: #555;
    position: absolute;
    bottom: -2rem;
    width: 100%;
    transform: skew(-45deg);
    transform-origin: top;
  }

  &::before {
    content: "";
    background: #777;
    position: absolute;
    left: -2rem;
    top: 0;
    width: 2rem;
    height: 100%;
    transform: skewY(-45deg);
    transform-origin: right;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: calc(100% - 3rem);
  width: calc(100% - 3rem);
  transform: translate(-50%, -50%);
  object-fit: cover;
  animation: ${hoveringImg} 5s infinite ease-in-out;
`;

const PerspectiveImage = ({ src, alt }) => (
  <Container>
    <Perspective />
    <Image src={src} alt={alt} />
  </Container>
);

export default PerspectiveImage;
