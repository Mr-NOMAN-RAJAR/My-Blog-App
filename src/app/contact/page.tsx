import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Bg-Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact-bg.jpeg" 
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-blue-900/50"></div> 
      </div>

      {/* Contact Form */}
      <div className="max-w-lg w-full p-8 bg-white/90 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Message:
            </label>
            <textarea
              placeholder="Write your message here"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
