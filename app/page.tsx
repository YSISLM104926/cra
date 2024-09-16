'use client'
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import heroImage from "@/assets/carhero.png"
import Card from "@/components/Card";
import { getCarss } from "@/services";
import { useEffect, useState } from "react";
import CarSelect from "@/components/CarSelect";

export default function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars();
  }, [])
  const getCars = async () => {
    const cars = await getCarss();
    setCars(cars.carLists);
  }
  return (
    <div>
      <section className="flex justify-center gap-4 py-8 md:py-10 flex-col-reverse lg:flex-row">
        <div>
          <div className="inline-block max-w-xl text-start justify-center">
            <h1 className={title()}>Make&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
            <br />
            <h1 className={title()}>
              Cars regardless of your expectations.
            </h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Beautiful, fast and modern Cars to your side
            </h2>
          </div>
          <div className="">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              Explore Cars
            </Link>
          </div>
        </div>
        <Image src={heroImage} alt="image" height={500} width={500} />
      </section>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Cars catalog</h1>
          <p className="mb-4">Explore our wide range of cars</p>
        </div>
        <div>
          <CarSelect />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <Card key={index} car={car} />
        ))}
      </div>
    </div>
  );
}
