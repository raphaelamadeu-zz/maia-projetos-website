import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export default FlexContainer;
