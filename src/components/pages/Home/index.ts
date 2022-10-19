// import { useState } from "react";
import { atom, useAtom } from "jotai";

// import Image from "next/image";
import useSWR from "swr";
import { client } from "lib/api";

type ImageType = {
  url: string;
  width: number;
  height: number;
};

export type PostsType = {
  id: string;
  title: string;
  image: ImageType;
  // tags: TagsType[];
  publishedAt: Date;
};

const filterAtom = atom("");
const ordersAtom = atom("");
const offsetAtom = atom(0);

const perPage = 4;

// const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcher = async (
  endpoint: string,
  filters: string,
  orders: string,
  offset: number
): Promise<any> => {
  const posts = await client.get({
    endpoint,
    queries: {
      fields: "id,title,image,publishedAt",
      limit: perPage,
      filters,
      orders,
      offset,
    },
  });
  return posts;
};

export type TagsType = {
  id: string;
  name: string;
};

const fetcherTags = async (endpoint: string): Promise<TagsType[]> => {
  const tags = await client.get({
    endpoint,
    queries: {
      fields: "id,name",
    },
  });
  return tags.contents;
};

export default function Home() {
  // const [filters, setFilters] = useState("");
  const [filters, setFilters] = useAtom(filterAtom);
  const [orders, setOrders] = useAtom(ordersAtom);
  const [offset, setOffset] = useAtom(offsetAtom);

  // const { data, error } = useSWR(`/api/user/${id}`, fetcher);
  const { data, error } = useSWR(["posts", filters, orders, offset], fetcher);
  // console.log(data);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  const { data: dataTags } = useSWR("tags", fetcherTags);
  // console.log(dataTags);

  const sortPosts = (id: string) => {
    if (id) {
      setFilters(`tags[contains]${id}`);
    } else {
      setFilters("");
    }
    setOffset(0);
  };

  const orderPosts = (event: any) => {
    const value = event.target.value;
    // console.log(value);
    if (value === "publishedAt") {
      // data?.reverse();
      // mutate("posts" + "?", fetcher);
      setOrders("publishedAt");
      // console.log(data);
    } else if (value === "-publishedAt") {
      setOrders("-publishedAt");
    }
    setOffset(0);
  };

  const pages = [];
  for (let i = 0; i < data?.totalCount / data?.limit; i++) {
    pages.push(data.limit * i);
  }

  const toPage = (limit: number) => {
    setOffset(limit);
  };

  return {
    filters,
    orders,
    data,
    error,
    dataTags,
    sortPosts,
    orderPosts,
    pages,
    toPage,
  };
}
