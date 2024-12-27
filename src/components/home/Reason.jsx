
"use client"
import {
    Card,
    CardContent
} from "@/components/ui/card"
import Image from 'next/image'
const Reason = () => {

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const data = [
        { id: "wisata", title: "Wisata Alam", image: "sibolga1.jpg" },
        { id: "budaya", title: "Kebudayaan Daerah", image: "tari.jpg" },
        { id: "kuliner", title: "Kuliner Tradisional", image: "makanan.jpg" },
    ];


    const renderData = data.map((item) => (
        <Card
            onClick={() => handleScroll(item.id)}
            key={item.id}
            className="group hover:bg-gray-400/10 sm:w-[22vw] w-full sm:h-[22vw] h-[50vw] rounded-full relative overflow-hidden cursor-pointer"
        >
            <Image
                src={`/image/${item.image}`}
                height={400}
                width={400}
                priority
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <CardContent className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white font-bold text-xl">{item.title}</span>
            </CardContent>
        </Card>
    ));


    return (
        <section>
            <div className="flex flex-col gap-14  w-full">
                <div className="flex flex-col gap-6">
                    <h1 className="text-7xl font-bold">Wajib ke Kota Sibolga</h1>
                    <h1 className="text-xl">Mengapa mesti minimal seumur hidup sekali ke kota sibolga?</h1>
                </div>
                <div className="flex sm:flex-row flex-col gap-10 justify-around items-center">
                    {
                        renderData
                    }
                </div>
            </div>
        </section>
    )
}

export default Reason