import Image from "next/image";

const Header = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="relative h-[50vh] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          fill
          alt="Header Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative h-[50vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
        <p className="text-xl text-gray-300">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
