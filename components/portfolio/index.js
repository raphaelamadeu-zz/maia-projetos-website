import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Card from "./card";
import Modal from "./modal";

const fadeIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  flex: 1;
  align-items: center;
  animation: ${(props) => (props.modalActive ? fadeOut : fadeIn)} 0.5s ease
    forwards;
  z-index: 1;
  grid-column-gap: 1rem;
`;

const Portfolio = ({ onSelect, data, setModalActive, modalActive }) => {
  const [currentCounter, setCurrentCounter] = useState(0);
  const [currentElem, setCurrentElem] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      if (modalActive) {
        setCurrentCounter((counter) =>
          counter === currentElem.images.length - 1 ? 0 : counter + 1
        );
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [modalActive]);

  useEffect(() => {
    if (modalActive && currentElem)
      onSelect(currentElem.images[currentCounter]?.src);
  }, [currentCounter]);

  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  return (
    <>
      <Container modalActive={modalActive}>
        {sliceIntoChunks(data, 3).map((row, index) =>
          row.map((elem) => (
            <Card
              entry={elem}
              onClick={() => {
                setModalActive(true);
                setCurrentElem(elem);
              }}
              onHover={() => onSelect(elem.images[0].src)}
              inverse={index % 2 === 0}
            />
          ))
        )}
      </Container>
      <Modal
        data={currentElem}
        isActive={modalActive}
        setIsActive={setModalActive}
      />
    </>
  );
};

export default Portfolio;
