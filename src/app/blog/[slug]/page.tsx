type BlogProps = {
  params: { slug: string };
};

const blogData: Record<string, { title: string; content: string }> = {
  "power-of-positivity": {
    title: "The Power of Positivity",
    content:
      " Unlock the incredible power of a positive mindset! 🌟😊 Learn how positivity can transform your life, boost your confidence, and help you overcome challenges. 🌈 Embrace optimism and watch as it brings light to every aspect of your life!  Positivity is the key to happiness and success...💫",
  },
  "overcoming-challenges": {
    title: "Overcoming Challenges",
    content:
      "Life is full of challenges,💪  but with the right mindset, you can conquer anything! 🌱 Discover strategies to overcome obstacles, stay resilient, and keep pushing forward even when things get tough. 🌟 Let every challenge be an opportunity for growth!... 🚀",
  },
  "success-secrets": {
    title: "Success Secrets",
    content:
      " Success isn’t just about hard work – it’s about smart strategies and the right mindset! 🌟 Uncover the secrets to achieving your goals, staying motivated, and creating lasting success. 💼✨ Learn from the experiences of successful people and unlock your potential!...🚀",
  },
  "healthy-living": {
    title: "Healthy Living",
    content:
      "🍎 Embrace a lifestyle of wellness and vitality! 🌿 Discover tips on nutritious eating, staying active, and maintaining a balanced mind and body. 💪 Start your journey toward healthier living today and feel the difference!...✨",
  },
  "power-of-focus": {
    title: "The Power of Focus",
    content:
      " Unleash the power of focus and boost your productivity! 💪 Learn how to eliminate distractions, stay concentrated on your goals, and achieve success with sharp focus. 🚀 Mastering focus is the key to accomplishing more in less time...🔑",
  },
  "time-management": {
    title: "Time Management Tips",
    content:
      "⏰ Discover effective time management strategies that will help you prioritize tasks, reduce stress, and increase productivity. 💡 Learn how to manage your time efficiently to achieve your goals and maintain a healthy work-life balance...🌟.",
  },
};

export default function BlogPost({ params }: BlogProps) {
  const { slug } = params;
  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">Blog not found</h1>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-start pl-10"
      style={{
        backgroundImage: "url('/images/think.jpg')",
      }}
    >
      <div className="max-w-2xl w-full bg-blue-600/60 sm:p-16 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="mt-4 text-lg leading-relaxed">{blog.content}</p>
      </div>
    </div>
  );
}
