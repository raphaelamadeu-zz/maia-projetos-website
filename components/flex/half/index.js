import styled from "styled-components";

const Half = styled.div`
  @media screen and (min-width: 901px) {
    flex: 0 0 50%;
    min-height: 400px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
`;

export default Half;
