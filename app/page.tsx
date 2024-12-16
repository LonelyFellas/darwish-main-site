import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col px-40 pt-60 min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Darwish&apos;s Blog
        </h1>
        <p className="text-lg mb-8">
          This is a blog for Darwish, a software engineer. I will share my
          learning notes and some interesting things here. I hope you can learn
          something from my blog. If you have any questions, please contact me.
          My email is darwish@darwish.me. My github is
          https://github.com/darwish-me.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/docs">
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
              Read More
            </button>
          </Link>
          <Link href="https://nextjs.org/learn">
            <button className="border border-black text-black py-2 px-4 rounded hover:bg-gray-200 transition">
              Document
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/path/to/your/image.png" // 替换为你的背景图像路径
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
    </div>
  );
}
