import styled from "styled-components";
import shoeImg from "../assets/shoe.png";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

type Props = {};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #cb0a1d;
  color: white;
  @media screen and (max-width: 600px) {
    padding-top: 60px;
  }
`;

const Wrapper = styled.div`
  width: calc(100% - 48px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const BannerContainer = styled.div`
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 4em;
`;
const Subtitle = styled.p`
  font-size: 2em;
  font-weight: 100;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Button = styled(motion.button)`
  outline: none;
  border: none;
  border-radius: 5px;

  line-height: 1.5rem;

  cursor: pointer;
  color: #cb0a1d;

  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: white;

  transition: 200ms ease all;

  &:hover {
    scale: 1.1;
  }
`;
const ScrollBtn = styled(ScrollLink)`
  outline: none;
  border: none;
  border-radius: 5px;

  line-height: 1.5rem;

  cursor: pointer;
  color: #cb0a1d;

  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: white;

  transition: 200ms ease all;

  &:hover {
    scale: 1.1;
  }
`;
const ButtonOutline = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;
`;

const HeroBanner = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>EShop For Shoes, Clothing and More</Title>
          <Subtitle>
            This is the right place if you're looking for quality with less
            price.
          </Subtitle>
          <BtnContainer>
            <ScrollBtn to="searchInput" smooth={true}>
              Shop Now
            </ScrollBtn>
            <ButtonOutline>Join Now</ButtonOutline>
          </BtnContainer>
        </Content>
        <BannerContainer>
          <motion.img
            src={shoeImg}
            alt="banner"
            animate={{
              rotate: [-10, 10, -10],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </BannerContainer>
      </Wrapper>
    </Container>
  );
};

export default HeroBanner;
