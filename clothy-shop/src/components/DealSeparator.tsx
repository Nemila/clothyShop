import styled from "styled-components";
import bannerImg from "../assets/banner.jpg";

type Props = {};
const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${bannerImg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  color: white;
  padding: 1rem;

  h2 {
    width: 80%;
    max-width: 600px;
    text-align: center;
    font-weight: 400;
  }
`;
const DealSeparator = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quia
          tempore neque porro.
        </h2>
      </Wrapper>
    </Container>
  );
};

export default DealSeparator;
