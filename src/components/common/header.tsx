import { css } from "@emotion/react";
import { mq } from "lib/themes";
// import { useState } from "react";
import { useAtom } from "jotai";
import { menuAtom } from "lib/atom";

import Link from "next/link";
import { siteMeta } from "lib/meta";
const { siteTitle } = siteMeta;

export default function Header() {
  // const [navIsOpen, setNavIsOpen] = useState(false);
  const [menu, setMenu] = useAtom(menuAtom);

  const toggleNav = () => {
    // menu ? setMenu(false) : setMenu(true);
    // setNavIsOpen((prev) => !prev);
    setMenu((prev) => !prev);
  };

  return (
    <header css={container}>
      <p>
        <Link href="/">{siteTitle}</Link>
      </p>
      <button onClick={toggleNav}>メニュー</button>
    </header>
  );
}

const container = css`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #ccc;
  width: 100%;
  top: 0;
  z-index: 1;
  ${mq("md")} {
    button {
      display: none;
    }
  }
`;
