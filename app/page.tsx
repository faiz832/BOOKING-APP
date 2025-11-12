import Card from "@/components/Card/Card";
import Hero from "@/components/Hero/Hero";

const datas = [
  {
    name: "Luxury Room",
    price: "100.000",
    capacity: 1,
  },
  {
    name: "Luxury Room 2",
    price: "200.000",
    capacity: 2,
  },
  {
    name: "Luxury Room 3",
    price: "300.000",
    capacity: 3,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Camp & Villa</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            pariatur!
          </p>
        </div>
        <div className="max-w-7xl py-6 pb-20 px-4 mx-auto">
          <div className="grid gap-7 md:grid-cols-3">
            {datas.map((data, i) => (
              <Card
                key={i++}
                name={data.name}
                price={data.price}
                capacity={data.capacity}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
