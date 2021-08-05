import { Suspense } from "react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";

const People = dynamic(() => import("../components/People"), { ssr: false });

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #b8b8b8;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <ErrorBoundary fallbackRender={() => <Error />}>
        <Suspense fallback={<Loader />}>
          <People />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default Home;
