import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="mb-10 block">
              <Image src="/images/logo.png" width={50} height={50} alt="logo" />
            </Link>
            <p className="text-gray-300 w-full lg:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              doloribus quo illum nihil est fuga?
            </p>
          </div>
          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-300">
                  <li>
                    <Link href="/about">Tentang</Link>
                  </li>
                  <li>
                    <Link href="/camp">Camp</Link>
                  </li>
                  <li>
                    <Link href="/villa">Villa</Link>
                  </li>
                  <li>
                    <Link href="/reservation">Reservasi</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
                <ul className="list-item space-y-5 text-gray-300">
                  <li>
                    <Link href="#">Payment Method</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-8 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 rounded bg-white"
                  placeholder="example@gmail.com"
                />
              </div>
              <button className="bg-blue-400 p-3 font-bold text-white w-full text-center rounded hover:bg-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-400  py-8 text-center text-gray-400">
        &copy; Copyright 2025 | Moonvill | All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
