import "modern-normalize/modern-normalize.css";
// import "../styles/globals.css";
import { Global, css } from "@emotion/react";
import type { AppProps } from "next/app";
import { colors } from "lib/themes";

import Layout from "components/common/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={global} />
      <Component {...pageProps} />
    </Layout>
  );
}

const global = css`
  /* html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  } */

  #__next {
    min-height: 100vh;
  }

  ul,
  ol {
    list-style-type: none;
    padding-left: 0;
  }

  dd {
    margin-left: 0;
  }

  a {
    /* color: inherit; */
    color: ${colors.primary};
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  /* * {
    box-sizing: border-box;
  } */

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */
`;

// export default MyApp;
