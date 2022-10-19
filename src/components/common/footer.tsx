import { css } from "@emotion/react";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer css={container}>
      <p>
        <small>&copy; {year} Stan.</small>
      </p>
    </footer>
  );
}

const container = css`
  position: sticky;
  text-align: center;
  top: 100vh;
`;
