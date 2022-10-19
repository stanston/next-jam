import Head from "next/head";
import { useRouter } from "next/router";

// サイトに関する情報
import { siteMeta } from "lib/meta";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta;

// 汎用OGP画像
import siteImg from "../../../public/images/jotai.png";

type MetaType = {
  pageTitle?: string;
  pageDesc?: string;
  pageImg?: string;
  pageImgW?: string;
  pageImgH?: string;
};

export default function Meta(props: MetaType) {
  // ページのタイトル
  const title = props.pageTitle
    ? `${props.pageTitle} | ${siteTitle}`
    : siteTitle;

  // ページの説明
  const desc = props.pageDesc ?? siteDesc;

  // ページのURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  // OGP画像
  const img = props.pageImg || siteImg.src;
  const imgW = props.pageImgW || siteImg.width;
  const imgH = props.pageImgH || siteImg.height;
  const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW as string} />
      <meta property="og:image:height" content={String(imgH)} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
