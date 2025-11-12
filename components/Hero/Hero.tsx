import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-1"></div>
      <div className="absolute inset-0">
        <Image
          src="/images/bg.jpg"
          alt="background"
          fill
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-center z-10">
        <h1 className="text-7xl font-extrabold leading-tight mb-3 capitalize">
          Have fun and relax in the most comfortable place
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Dapatkan penawaran spesial hanya untukmu hari ini!
        </p>
        <div className="flex gap-5">
          <Link
            href="/"
            className="bg-blue-400 text-white hover:bg-blue-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg"
          >
            Camp
          </Link>
          <Link
            href="/"
            className="bg-blue-400 text-white hover:bg-blue-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg"
          >
            Villa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
