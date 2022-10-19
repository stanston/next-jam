import { useRouter } from "next/router";
import useSWR from "swr";
import { client } from "lib/api";

type ImageType = {
  url: string;
  width: number;
  height: number;
};

type PostType = {
  id: string;
  title: string;
  publishedAt: Date;
  image: ImageType;
  content: string;
};

export default function PostsPost() {
  const router = useRouter();

  const fetcher = async (endpoint: string): Promise<PostType> => {
    const post = await client.get({
      endpoint,
      contentId: router.query.id as string,
      queries: {
        fields: "id,title,publishedAt,image,content",
      },
    });
    return post;
  };

  const { data, error } = useSWR("posts", fetcher);

  return {
    data,
    error,
  };
}
