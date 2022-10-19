import { css } from "@emotion/react";
import { colors, mq } from "lib/themes";
import Meta from "components/common/meta";
import Hero from "components/parts/Hero";

import { formatDate } from "lib/utilities";
import Link from "next/link";
import Image from "next/image";

import type { TagsType, PostsType } from "components/pages/Home";
import Home from "components/pages/Home";

// export default function HomePage(props: { posts: PostsType }) {
export default function HomePage() {
  const {
    filters,
    orders,
    data,
    error,
    dataTags,
    sortPosts,
    orderPosts,
    pages,
    toPage,
  } = Home();

  return (
    <>
      <Meta />
      <Hero title="Jamstack テスト" />

      <div css={head}>
        <dl css={tags}>
          <dt>タグ</dt>
          <dd>
            <ul>
              <li>
                <button
                  css={!filters && isActive}
                  onClick={() => sortPosts("")}
                >
                  すべて
                </button>
              </li>
              {dataTags &&
                dataTags.map(({ id, name }: TagsType) => (
                  <li key={id}>
                    <button
                      css={filters === `tags[contains]${id}` && isActive}
                      onClick={() => sortPosts(id)}
                    >
                      {name}
                    </button>
                  </li>
                ))}
            </ul>
          </dd>
        </dl>
        <select value={orders} onChange={orderPosts}>
          <option value="-publishedAt">新しい順</option>
          <option value="publishedAt">古い順</option>
        </select>
      </div>

      {error && <div>failed to load</div>}
      {!data && <div>loading...</div>}
      {data && (
        <>
          <div css={card}>
            {data.contents.map(
              ({ id, title, image, publishedAt }: PostsType) => (
                <Link href={`/posts/${id}`} key={id}>
                  <a>
                    <h2>{title}</h2>
                    <div>
                      <Image
                        src={image ? image.url : "/images/jotai.png"}
                        alt={title}
                        width={image ? image.width : 225}
                        height={image ? image.height : 205}
                      />
                    </div>
                    <time>{formatDate(publishedAt)}</time>
                  </a>
                </Link>
              )
            )}
          </div>
          {/* <div>totalCount: {data.totalCount}</div>
          <div>offset: {data.offset}</div>
          <div>limit: {data.limit}</div>
          <div>totalPage: {data.totalCount / data.limit}</div> */}
          {data.totalCount > data.limit && (
            <ol css={pager}>
              {pages.map((limit, index) => {
                return (
                  <li key={index}>
                    <button
                      css={data.offset === data.limit * index && isActive}
                      onClick={() => toPage(limit)}
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}
            </ol>
          )}
        </>
      )}
    </>
  );
}

const head = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const tags = css`
  display: flex;
  align-items: center;
  gap: 20px;
  ul {
    display: flex;
    gap: 20px;
  }
`;

const isActive = css`
  color: #fff;
  background-color: ${colors.secondary};
`;

const card = css`
  display: grid;
  gap: 20px;
  ${mq("md")} {
    grid-template-columns: 50% 50%;
    a:hover {
      opacity: 0.5;
    }
  }
  a {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  div {
    text-align: center;
  }
  img {
    max-width: 100%;
  }
  time {
    display: block;
    color: #666;
    text-align: right;
  }
`;

const pager = css`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 2vw;
`;
