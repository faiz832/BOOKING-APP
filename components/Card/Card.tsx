import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = ({
  name,
  price,
  capacity,
}: {
  name: string;
  price: string;
  capacity: number;
}) => {
  return (
    <div className="bg-white shadow-lg rounded transition hover:shadow-sm">
      <div className="h-[260px] w-auto rounded-t-sm relative">
        <Image
          src="/images/bg.jpg"
          width={384}
          height={256}
          alt="image"
          className="w-full h-full object-cover rounded-t-sm"
        />
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-medium">
          <Link href="#" className="hover:text-gray-800 transition">
            {name}
          </Link>
        </h4>
        <h4 className="text-2xl mb-7">
          <span className="font-semibold text-gray-600">Rp {price}</span>
          <span className="text-gray-400 text-sm">/Malam</span>
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoPeopleOutline />
            <span>{capacity} Orang</span>
          </div>
          <Link
            href="#"
            className="px-6 py-2 md:px-10 font-semibold text-white bg-blue-400 rounded hover:bg-blue-500 transition"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
