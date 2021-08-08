import styled from "styled-components";

const Container = styled.button`
  height: 350px;
  position: relative;
  border: none;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  &:hover {
    & img {
      transform: scale(1.2);
    }

    .content {
      bottom: 0;
    }
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`;

const Content = styled.div`
  position: absolute;
  bottom: calc(-100% + 3rem);
  height: 100%;
  width: 100%;
  padding: 1rem;
  backdrop-filter: blur(10px) brightness(0.5);
  color: #fff;
  transition: 0.5s all ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 1rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`;

const Card = ({ entry, onClick, onHover }) => {
  const { name, description, images } = entry;
  const [image] = images;

  return (
    <Container>
      <Image src={image.src} alt={name} />
      <Content className="content">
        <span>{name}</span>
        <p>{description}</p>
        <span>Clique para ver mais</span>
      </Content>
    </Container>
  );
};

export default Card;
