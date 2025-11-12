"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./Navlink";
import clsx from "clsx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const abortController = new AbortController();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-0 w-full z-20 transition-all duration-300",
        isScrolled ? "bg-white shadow-xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href={`/`}>
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            alt="logo"
            priority
          />
        </Link>
        <Navlink isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default Navbar;
