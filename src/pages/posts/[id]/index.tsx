import { css } from "@emotion/react";
import Meta from "components/common/meta";

import { formatDate } from "lib/utilities";
import Image from "next/image";
import Button from "components/parts/Button";

import PostsPost from "components/pages/Posts/Post";

export default function PostsPostPage() {
  const { data, error } = PostsPost();

  return (
    <>
      {error && <div>failed to load</div>}
      {!data && <div>loading...</div>}
      {data && (
        <>
          <Meta pageTitle={data.title} pageDesc={data.content} />
          <h1>{data.title}</h1>
          <time css={time}>{formatDate(data.publishedAt)}</time>
          {data.image && (
            <div css={image}>
              <Image
                src={data.image.url}
                alt={data.title}
                width={data.image.width}
                height={data.image.height}
              />
            </div>
          )}
          {/* <div>{data.content}</div> */}
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
          <p>
            <Button label="ホームへ戻る" href="/" />
          </p>
        </>
      )}
    </>
  );
}

const time = css`
  display: block;
  text-align: right;
`;

const image = css`
  text-align: center;
  img {
    max-width: 100%;
  }
`;
