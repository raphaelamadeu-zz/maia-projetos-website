import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import AnchorButton from "../../anchor-button";

const shrink = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 33.3%;
  }
`;

const grow = keyframes`
  0% {
    width: 33.3%;
  }

  100% {
    width: 100%;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: ${(props) => (props.isReverse ? "33.3%" : "100%")};
  backdrop-filter: blur(5px) brightness(0.8);
  border: 2px solid #fff;
  animation: 1s 0.5s ${(props) => (props.isReverse ? grow : shrink)} ease
    forwards;
`;

const ReturnButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
  backdrop-filter: blur(5px) brightness(0.8);
  border: 2px solid #fff;
  background: none;
  z-index: 2;
  cursor: pointer;
  color: #fff;
  transition: all 0.5s ease;

  svg {
    transform: scale(1.2);
  }

  opacity: 0;
  animation: 0.5s 1.5s ${fadeIn} ease forwards;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: all 0.5s ease;

  & > a {
    margin-top: 2rem;
  }

  animation: 0.5s 1.5s ${fadeIn} ease forwards;
`;

const Modal = ({ isActive, data, setIsActive }) => {
  const [isReverse, setIsReverse] = useState(false);

  const closeModal = () => {
    setIsReverse(true);
    setTimeout(() => {
      setIsActive(false);
      setIsReverse(false);
    }, 1500);
  };
  return (
    <>
      {isActive && (
        <>
          <ReturnButton
            style={{ animationDirection: isReverse ? "reverse" : "forwards" }}
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </ReturnButton>
          <Container isReverse={isReverse}>
            <Content
              style={{ animationDirection: isReverse ? "reverse" : "forwards" }}
            >
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <p>{data.description}</p>
              <AnchorButton dark href="#">
                Saber mais
              </AnchorButton>
            </Content>
          </Container>
        </>
      )}
    </>
  );
};

export default Modal;
