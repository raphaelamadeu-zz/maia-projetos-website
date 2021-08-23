import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: row;
  }
  flex-direction: column;
  z-index: 1;
`;

const Button = styled.a`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 100%;
  background: #fff;
  border: 2px solid #333;
  margin-top: 1rem;
  margin-left: 0.5rem;
  transition: all 0.25s ease;
  color: #333;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #333;
    border-radius: 100%;
    transform: translate(-100%, 100%);
    transition: all 0.25s ease;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.3);
    border-color: #fff;

    &::after {
      transform: translate(0, 0);
    }

    & > svg {
      color: #fff;
    }
  }

  & > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1.25);
    z-index: 1;
    transition: all 0.15s ease;
  }
`;

const icons = [
  {
    icon: faWhatsapp,
    href: "#1",
  },
  {
    icon: faFacebookF,
    href: "#2",
  },
  {
    icon: faInstagram,
    href: "#3",
  },
];

const SocialButtons = () => (
  <Container>
    {icons.map((elem) => (
      <Button key={elem.href}>
        <FontAwesomeIcon icon={elem.icon} />
      </Button>
    ))}
  </Container>
);

export default SocialButtons;
