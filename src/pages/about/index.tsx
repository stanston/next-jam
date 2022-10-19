import Meta from "components/common/meta";
import Hero from "components/parts/Hero";
import thumb from "../../../public/images/emotion.png";
import Button from "components/parts/Button";

import About from "components/pages/About";
const { description, alertTest } = About();

export default function AboutPage() {
  return (
    <>
      <Meta pageTitle="アバウト" pageDesc={description} />

      <Hero title="About" text={description} thumb={thumb} thumbAlt="Emotion" />
      <ul>
        <li>
          {/* <Button handleClick={alertTest}>プライマリボタン</Button> */}
          <Button label="プライマリボタン" handleClick={alertTest} />
        </li>
        <li>
          <Button label="セカンダリボタン" color="secondary" />
        </li>
      </ul>
    </>
  );
}
