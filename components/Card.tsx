'use client'
import { Card as NextUICard, CardHeader, CardBody, Image, Chip, Divider, Button } from "@nextui-org/react";
import carImage from '@/assets/carhero.png'
export default function Card({ car }: { car: any }) {
    const { name, price, image, carType, carBrand, carAvg } = car;
    return (
        <NextUICard className="py-8">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image.url}
                    width={400}
                    height={100}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-6 flex-col items-start mt-2">
                <p className="text-tiny uppercase font-bold">{name}</p>
                <small className="text-default-500 mt-2">${price}</small>
                <div className="flex h-5 items-center space-x-4 text-small mt-2">
                    <div>{carType}</div>
                    <Divider orientation="vertical" />
                    <div>{carBrand}</div>
                    <Divider orientation="vertical" />
                    <div>{carAvg} MPG</div>
                </div>
                <Button  className="bg-gradient-to-tr mt-6 w-full
                 from-blue-500 to-blue-900 text-white shadow-lg">
                    Rent Now
                </Button>
            </CardHeader>
        </NextUICard>
    );
}