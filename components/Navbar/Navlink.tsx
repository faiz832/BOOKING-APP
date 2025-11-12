"use client";

import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const Navlink = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded md:hidden hover:bg-gray-100"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 gap-y-2 rounded bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded md:hover:bg-transparent md:p-0"
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="/camp"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded md:hover:bg-transparent md:p-0"
            >
              Camp
            </Link>
          </li>
          <li>
            <Link
              href="/villa"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded md:hover:bg-transparent md:p-0"
            >
              Villa
            </Link>
          </li>
          <li>
            <Link
              href="/reservation"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded md:hover:bg-transparent md:p-0"
            >
              Reservasi
            </Link>
          </li>
          <li className="pt-2 md:pt-0">
            <Link
              href="/login"
              className="py-2 px-6 bg-blue-400 text-white hover:bg-blue-500 rounded"
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
