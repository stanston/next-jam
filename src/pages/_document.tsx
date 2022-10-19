import { Html, Head, Main, NextScript } from "next/document";

import { siteMeta } from "lib/meta";
const { siteLang } = siteMeta;

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
