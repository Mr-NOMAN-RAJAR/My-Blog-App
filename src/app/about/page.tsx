import Image from 'next/image';

export default function About() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/background.png"
          alt="About Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl text-center p-8 bg-white/100 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Our mission is to inspire and uplift people through powerful quotes, 
          inspiring stories, and meaningful insights. We believe in the power of 
          positivity to transform lives and create a better world.
        </p>
      </div>
    </div>
  );
}
