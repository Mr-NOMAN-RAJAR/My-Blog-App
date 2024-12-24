import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg mb-6">
        Discover amazing quotes and inspiring stories!
      </p>
      <a
        href="/blog"
        className="px-6 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200 mb-6"
      >
        Explore Blogs
      </a>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        {/* LinkedIn Icon */}
        <a
          href="www.linkedin.com/in/noman-rajar-5351bb2b4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition duration-300"
        >
          <i className="fab fa-linkedin-in text-3xl"></i>
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Mr-NOMAN-RAJAR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <i className="fab fa-github text-3xl"></i>
        </a>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </div>
    </div>
  );
}
