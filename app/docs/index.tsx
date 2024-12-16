import Link from "next/link";

const Docs = () => {
  return (
    <div className="flex">
      <nav className="w-1/4 p-4 border-r">
        <h2 className="text-xl font-bold">文档目录</h2>
        <ul>
          <li>
            <Link href="/docs/getting-started">开始使用</Link>
          </li>
          <li>
            <Link href="/docs/features">功能</Link>
          </li>
          <li>
            <Link href="/docs/api">API 参考</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold">欢迎来到我的博客文档</h1>
        <p>这里是一些关于如何使用这个博客的基本信息。</p>
      </main>
    </div>
  );
};

export default Docs;
