import styled from "styled-components";
import Card from "./card";

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-column-gap: 2rem;
  flex: 1;
  align-items: center;
`;

const Portfolio = ({ selected, onSelect, data }) => {
  return (
    <>
      <Container>
        {data.map((elem) => (
          <Card entry={elem} onClick={() => onSelect(elem)} />
        ))}
      </Container>
      {/* <h1>i'm a modal</h1> */}
    </>
  );
};

export default Portfolio;
