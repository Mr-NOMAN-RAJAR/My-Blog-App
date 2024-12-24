"use client";

import { useState } from "react";

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

  // State for comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">Blog not found</h1>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex justify-start items-center px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: "url('/images/think.jpg')",
      }}
    >
      <div className="max-w-3xl w-full bg-blue-600/60 sm:p-12 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold">{blog.title}</h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed">{blog.content}</p>

        {/* Comments Section */}
        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comments</h2>

          {/* Comments List */}
          <div className="mb-4">
            {comments.length === 0 ? (
              <p className="text-gray-200">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              <ul>
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-300 py-2 text-gray-200"
                  >
                    {comment}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Add New Comment */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="text-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none w-full sm:w-auto"
            />
            <button
              onClick={handleAddComment}
              className="mt-4 sm:mt-0 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
