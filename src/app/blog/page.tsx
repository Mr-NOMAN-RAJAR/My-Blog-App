export default function BlogPage() {
  const blogs = [
    {
      title: "The Power of Positivity",
      slug: "power-of-positivity",
      image: "/images/positivity.jpg",
      description: "Learn how positivity can change your life for the better.",
    },
    {
      title: "Overcoming Challenges",
      slug: "overcoming-challenges",
      image: "/images/challenges.jpg",
      description:
        "Discover strategies for overcoming life's obstacles and rising above.",
    },
    {
      title: "Success Secrets",
      slug: "success-secrets",
      image: "/images/success.jpg",
      description:
        "Unlock the secrets to achieving lasting success and fulfillment.",
    },
    {
      title: "Healthy Living",
      slug: "healthy-living",
      image: "/images/helthy-life.jpg",
      description:
        "Tips and tricks for leading a healthy and balanced lifestyle.",
    },
    {
      title: "The Power of Focus",
      slug: "power-of-focus",
      image: "/images/focus.jpg",
      description:
        "How focusing on your goals can boost productivity and success.",
    },
    {
      title: "Time Management Tips",
      slug: "time-management",
      image: "/images/time-management.jpg",
      description:
        "Master time management techniques to make the most of your day.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Header */}
      <header className="py-6  fixed top-0 left-0 w-full shadow-lg z-20">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Website Title */}
          <h1 className="text-2xl font-bold text-white">My Blog</h1>

          {/* Navigation Links */}
          <nav className="space-x-6">
            <a
              href="/"
              className="text-white hover:text-yellow-400 transition duration-200"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-yellow-400 transition duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white hover:text-yellow-400 transition duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Blog Section */}
      <div className="container mx-auto p-6 pt-32 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-shadow-md">
          Latest Blogs
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
              <div className="p-4 text-gray-800">
                <h3 className="text-xl font-bold group-hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600">{blog.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-r from-black/70 via-gray-900 to-black/70 w-full text-center text-gray-300 relative">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
