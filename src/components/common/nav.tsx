import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { colors, mq } from "lib/themes";

import { useAtom } from "jotai";
import { menuAtom } from "lib/atom";

import Link from "next/link";

type ListItem = {
  link: string;
  text: string;
};

export default function Nav() {
  const router = useRouter();
  const [menu, setMenu] = useAtom(menuAtom);

  const closeMenu = () => {
    menu && setMenu(false);
  };

  const lists: ListItem[] = [
    // { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/404", text: "404" },
  ];

  return (
    <nav css={[container, menu && isOpen]}>
      <ul>
        {lists.map((list: ListItem, index: number) => {
          const active = router.asPath === list.link;
          // || (router.pathname === "/posts/[id]" && list.link === "/posts");
          return (
            <li key={index}>
              <Link href={list.link} passHref>
                <a css={active && isActive} onClick={closeMenu}>
                  {list.text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <button onClick={closeMenu}>閉じる</button>
    </nav>
  );
}

const container = css`
  position: fixed;
  background-color: #ccc;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  ${mq("md")} {
    position: fixed;
    background-color: transparent;
    width: auto;
    height: auto;
    right: 20px;
    visibility: visible;
    opacity: 1;
  }
  ${mq("md")} {
    ul {
      display: flex;
      gap: 20px;
    }
  }
  .isActive {
    color: ${colors.primary};
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    ${mq("md")} {
      display: none;
    }
  }
`;

const isOpen = css`
  visibility: visible;
  opacity: 1;
`;

const isActive = css`
  color: #fff;
  background-color: ${colors.primary};
`;
