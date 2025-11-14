import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const Navlink = ({ isScrolled }: { isScrolled: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="flex items-center justify-end md:order-2">
          <div className="hidden text-sm bg-gray-50 border rounded-full md:me-0 md:block focus:ring-4 focus:ring-gray-300 overflow-hidden">
            <Image
              src={session.user.image || "/images/bg.jpg"}
              width={64}
              height={64}
              alt="avatar"
              className="size-8"
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={() => signOut()}
              className="md:block hidden py-2 px-4 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
      ) : null}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 cursor-pointer transition"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 gap-y-2 rounded bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-transparent">
          {["Tentang", "Camp", "Villa"].map((item, idx) => {
            const href = ["/about", "/camp", "/villa"][idx];
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    "block py-2 px-3 hover:bg-gray-100 rounded md:hover:bg-transparent md:p-0",
                    isScrolled ? "text-gray-800" : "text-gray-100"
                  )}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          {session && (
            <>
              <li>
                <Link
                  href="/reservation"
                  className={clsx(
                    "block py-2 px-3 hover:bg-gray-100 rounded md:hover:bg-transparent md:p-0",
                    isScrolled ? "text-gray-800" : "text-gray-100"
                  )}
                >
                  Reservasi
                </Link>
              </li>
              {session?.user.role === "admin" && (
                <li>
                  <Link
                    href="/admin/dashboard"
                    className={clsx(
                      "block py-2 px-3 hover:bg-gray-100 rounded md:hover:bg-transparent md:p-0",
                      isScrolled ? "text-gray-800" : "text-gray-100"
                    )}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </>
          )}
          {session ? (
            <li className="pt-2 md:pt-0">
              <button
                onClick={() => signOut()}
                className="md:hidden py-2 px-4 bg-red-400 text-white hover:bg-red-600 rounded cursor-pointer"
              >
                Log out
              </button>
            </li>
          ) : (
            <li className="pt-2 md:pt-0">
              <Link
                href="/login"
                className="py-2 px-6 bg-blue-400 text-white hover:bg-blue-500 rounded"
              >
                Log in
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navlink;
