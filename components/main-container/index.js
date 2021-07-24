import styled from "styled-components";

const MainContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  bottom: 2rem;
  right: 2rem;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
`;

export default MainContainer;
