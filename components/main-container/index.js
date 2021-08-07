import styled from "styled-components";

const MainContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  bottom: 1rem;
  right: 1rem;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MainContainer;
