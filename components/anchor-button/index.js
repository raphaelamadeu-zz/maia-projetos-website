import styled from "styled-components";

const AElement = styled.a`
  z-index: 1;
  text-decoration: none;
  font-family: "Montserrat-Regular";
  color: #333;
  border-color: #333;
  border: 2px solid;
  padding: 0.75rem 2rem;
  overflow: hidden;
  position: relative;
  align-self: flex-start;

  ${(props) =>
    props.dark &&
    `
      color: #fff;
      border-color: #fff;
    `}
  transition: all 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.25s ease;
    transform: translate(0, 100%);

    ${(props) =>
      props.dark &&
      `
      background: #fff;
    `}
  }

  &:hover {
    &::before {
      transform: translate(0, 0);
    }

    border-color: #fff;
    color: #fff;

    ${(props) =>
      props.dark &&
      `
      color: #333;
      border-color: #333;
    `}
  }
`;

const AnchorButton = ({ href, onClick, dark, children }) => (
  <AElement dark={dark} onClick={onClick} href={href} target="_blank">
    {children}
  </AElement>
);

export default AnchorButton;
