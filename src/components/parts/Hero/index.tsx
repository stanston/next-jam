import { css } from "@emotion/react";
import Image from "next/image";

type ThumbType = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

type HeroProps = {
  // children: React.ReactNode;
  title: string;
  text?: string;
  // hasImage?: boolean;
  thumb?: ThumbType;
  thumbAlt?: string;
};
Hero.defaultProps = {
  thumbAlt: "",
};

export default function Hero(props: HeroProps) {
  return (
    <>
      {/* <h1 css={title}>{props.children}</h1> */}
      <h1 css={title}>{props.title}</h1>
      {props.text && <p>{props.text}</p>}
      {/* {props.hasImage && (
        <Image src="/vercel.svg" alt="Vercel Logo" width={144} height={32} />
      )} */}
      {props.thumb && (
        <Image
          src={props.thumb.src}
          alt={props.thumbAlt}
          width={props.thumb.width}
          height={props.thumb.height}
        />
      )}
    </>
  );
}

const title = css`
  font-size: 5vw;
  margin-bottom: 0;
`;
