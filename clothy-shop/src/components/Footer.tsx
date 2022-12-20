import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  margin-top: auto;

  color: white;
  background: black;
  border-top: 1px solid lightgrey;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>Copyright Colthy all rights reserved</p>
    </FooterStyle>
  );
};

export default Footer;
