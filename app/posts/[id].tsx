import { useRouter } from "next/router";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // 模拟文章数据
  const posts = [
    { id: "1", title: "第一篇文章", content: "这是第一篇文章的详细内容。" },
    { id: "2", title: "第二篇文章", content: "这是第二篇文章的详细内容。" },
    // 可以继续添加更多文章
  ];

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>文章未找到</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
