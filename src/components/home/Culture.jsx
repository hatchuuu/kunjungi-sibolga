import React from 'react'
import {
    Card,
    CardContent
} from "@/components/ui/card"
import Image from 'next/image';
const Culture = () => {

    const data = [
        { id: "wisata", title: "Wisata Alam", image: "sibolga1.jpg" },
        { id: "budaya", title: "Kebudayaan Daerah", image: "tari.jpg" },
        { id: "kuliner", title: "Kuliner Tradisional", image: "makanan.jpg" },
        { id: "pulauputri", title: "Wisata Alam", image: "sibolga1.jpg" },

    ];


    const renderData = data.map((item) => (



        <Card
            key={item.id}
            className="group sm:w-[26vw] w-full aspect-[9/16] group-hover:hover:aspect-[9/12] group-hover:sm:w-[18vw] hover:sm:w-[40vw] group-hover:hover:sm:w-[40vw] relative cursor-pointer duration-1000 transition-all rounded-lg"
        >
            <Image
                src={`/image/${item.image}`}
                height={400}
                width={400}
                alt={item.title}
                priority
                className="h-full w-full object-cover rounded-lg"
            />
            <CardContent className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                <span className="text-white font-bold text-xl">{item.title}</span>
            </CardContent>
        </Card>
    ));

    return (
        <section>
            <div className="flex flex-col gap-14 w-full">
                <div className="flex flex-col gap-6">
                    <h1 className="text-7xl font-bold">Tradisi Lokal di Kota Sibolga</h1>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 justify-between items-center group">
                    {
                        renderData
                    }
                </div>
            </div>
        </section>
    )
}

export default Culture