import { useRouter } from "next/router";
// import Meta from "components/common/meta";
import Hero from "components/parts/Hero";
import thumb from "../../../public/images/jotai.png";
import Button from "components/parts/Button";

export default function NotFoundPage() {
  const router = useRouter();

  const toHome = () => {
    router.push("/");
  };

  return (
    <>
      {/* <Meta /> */}
      <Hero title="404" text="ページが見つかりませんでした。" thumb={thumb} />
      <p>
        <Button label="ホームへ戻る" href="/" />
      </p>
    </>
  );
}
