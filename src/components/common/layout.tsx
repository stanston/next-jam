import { css } from "@emotion/react";
import { mq } from "lib/themes";
import Header from "components/common/header";
import Nav from "components/common/nav";
import Footer from "components/common/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <Nav />
      <main css={main}>{props.children}</main>
      <Footer />
    </>
  );
}

const main = css`
  padding-top: 50px;
  ${mq("md")} {
    max-width: 960px;
    margin: 0 auto;
  }
`;
