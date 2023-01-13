import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { UIProvider } from "../context/ui";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </QueryClientProvider>
  );
}
