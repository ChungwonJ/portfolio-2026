import Head from "next/head";
import PortfolioPage from "./portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>PortForU - 포트폴리오</title>
        <meta name="description" content="PortForU-포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortfolioPage/>
    </>
  );
}
