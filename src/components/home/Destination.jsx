import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const Destination = () => {

    const data = [
        { id: "wisata", title: "Wisata Alam", image: "sibolga1.jpg" },
        { id: "budaya", title: "Kebudayaan Daerah", image: "tari.jpg" },
        { id: "kuliner", title: "Kuliner Tradisional", image: "makanan.jpg" },
        { id: "pulauputri", title: "Wisata Alam", image: "sibolga1.jpg" },
        { id: "wisata2", title: "Wisata Alam", image: "sibolga1.jpg" },
        { id: "pulauputri3", title: "Wisata Alam", image: "sibolga1.jpg" },
        { id: "pulauputri5", title: "Wisata Alam", image: "sibolga1.jpg" },
        { id: "pulauputri6", title: "Wisata Alam", image: "sibolga1.jpg" },
        { id: "pulauputri7", title: "Wisata Alam", image: "sibolga1.jpg" },

    ];

    const renderData = data.map((item) => (

        <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1">
                <Card
                    key={item.id}
                    className="group  w-full aspect-square relative cursor-pointer duration-1000 transition-all rounded-lg"
                >
                    <Image
                        src={`/image/${item.image}`}
                        height={400}
                        width={400}
                        priority
                        className="h-full w-full object-cover rounded-lg"
                    />
                    <CardContent className="absolute inset-0 flex justify-center items-center  rounded-lg">
                        <span className="text-black font-bold text-xl">{item.title}</span>
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    ));


    return (

        <section>
            <div className="flex flex-col gap-14 w-full">
                <div className="flex flex-col gap-6">
                    <h1 className="text-7xl font-bold">Tradisi Lokal di Kota Sibolga</h1>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>


                        {renderData}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>


                        {renderData}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}
export default Destination