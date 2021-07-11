import styled from "@emotion/styled";
import type { NextPage } from "next";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #b8b8b8;
`;

const Home: NextPage = () => {
  return <Container>HOME</Container>;
};

export default Home;
