import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import queryClient from "../libs/queryClient";
import globalStyles from "../styles/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
