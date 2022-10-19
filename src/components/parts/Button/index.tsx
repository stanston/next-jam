import { css } from "@emotion/react";
import { colors } from "lib/themes";
import Link from "next/link";

type ButtonColor = "primary" | "secondary";

type ButtonType = {
  // children: React.ReactNode;
  label: string;
  color: ButtonColor;
  href?: string;
  handleClick?: () => void;
};
Button.defaultProps = {
  color: "primary",
};

export default function Button(props: ButtonType) {
  const currentColor = () => {
    if (props.color === "primary") {
      return primary;
    } else if (props.color === "secondary") {
      return secondary;
    }
  };

  return (
    <>
      {!props.href ? (
        <button css={[buttonStyle, currentColor()]} onClick={props.handleClick}>
          {/* {props.children} */}
          {props.label}
        </button>
      ) : (
        <Link href={props.href} passHref>
          <a css={[buttonStyle, currentColor()]}>{props.label}</a>
        </Link>
      )}
    </>
  );
}

const buttonStyle = css`
  color: #fff;
  padding: 5px 10px;
`;

const primary = css`
  background-color: ${colors.primary};
`;

const secondary = css`
  background-color: ${colors.secondary};
`;
