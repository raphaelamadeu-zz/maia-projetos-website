import styled from "styled-components";

const Container = styled.button`
  max-height: 350px;
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

  ${(props) =>
    props.inverse
      ? `
        clip-path: polygon(0 0, 100% 0, 50% 100%);
        transform: translateX(calc(-25%));
      `
      : `
        clip-path: polygon(0 100%, 100% 100%, 50% 0);
        transform: translateY(-100%) translateX(calc(25% + .5rem));
      `}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`;

const Content = styled.div`
  position: absolute;
  bottom: -100%;
  height: 100%;
  width: 100%;
  padding: 1rem;
  backdrop-filter: blur(10px) brightness(0.5);
  color: #fff;
  transition: 0.5s all ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: calc(25% + 1rem);
  padding-right: calc(25% + 1rem);

  ${(props) =>
    props.inverse ? `padding-bottom: calc(25%);` : `padding-top: calc(25%);`}

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

const Card = ({ entry, onClick, onHover, inverse }) => {
  const { name, description, images } = entry;
  const [image] = images;

  return (
    <Container
      inverse={inverse}
      onClick={() => onClick()}
      onMouseOver={() => onHover()}
    >
      <Image src={image.src} alt={name} />
      <Content inverse={inverse} className="content">
        <span>{name}</span>
        <p>{description}</p>
        <span>Clique para ver mais</span>
      </Content>
    </Container>
  );
};

export default Card;
