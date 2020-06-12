import { AppProps } from "next/app";
import "./_app.module.scss";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
