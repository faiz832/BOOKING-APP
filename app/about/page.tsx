import Header from "@/components/Header/Header";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

const AboutPage = () => {
  return (
    <div>
      <Header
        image="/images/bg.jpg"
        title="Tentang Kami"
        subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, accusantium."
      />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/images/bg.jpg" alt="image" width={650} height={579} />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Siapa Kita
            </h1>
            <p className="text-gray-700 py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              molestiae voluptatibus voluptates praesentium, officiis quis ea
              libero inventore enim vel quae minima cum, perspiciatis aliquam?
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision: </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus optio nulla voluptates illum eum fugiat, quia
                    nesciunt nihil nisi totam!
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mission: </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus optio nulla voluptates illum eum fugiat, quia
                    nesciunt nihil nisi totam!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
