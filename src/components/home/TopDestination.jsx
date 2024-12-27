import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const TopDestination = () => {

    const data = [
        {"image" : "/image/pulauputri.jpg", "title" :"Pulau Putri", "link" : "/wisata/1"},
        {"image" : "/image/pantaipandan.jpg", "title" :"Pantai Pandan", "link" : "/wisata/2"},
        {"image" : "/image/jembatankuning.jpg", "title" :"Jembatan Kuning", "link" : "/wisata/3"},
        {"image" : "/image/pulauponcan.jpg", "title" :"Pulau Poncan", "link" : "/wisata/4"}
    ]

    const renderComponents = data.map((d, i) => (
        <CarouselItem key={i} className="group basis-1/3 h-[30vh] w-full transition-all duration-300 hover:basis-1/2 hover:h-[50vh] flex items-center">
            <div className=" h-full  rounded-lg w-full relative ">
            <Image width={400} height={400} priority src={d.image} className='h-full w-full object-cover rounded-lg' />
                <div className="absolute inset-0  group-hover:scale-110 rounded-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                    <div className="absolute bottom-20 left-8">
                        <h1 className="text-white text-2xl font-bold">{d.title}</h1>
                    </div>
                    <div className="absolute bottom-10 left-8">
                        <Link href={d.link} className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition duration-300">
                            Kunjungi
                        </Link>
                    </div>
                </div>
            </div>
        </CarouselItem>
    ))


    return (
        <section>
            <div className="w-full h-[60vh] flex gap-10 p-10 pe-16 ps-12 shadow-lg border-gray-400 border rounded-[2rem]">
                <div className="flex gap-10 flex-col w-full justify-center">
                    <h1 className="text-6xl font-bold leading-tight text-gray-900">Wisata Populer Sibolga</h1>
                    <h1 className="text-lg leading-normal text-gray-600">
                        Wisata di Kota Ikan yang paling populer dan paling sering dikunjungi para wisatawan
                    </h1>
                    <Link href={"/wisata"} className="px-6 py-3 w-fit text-lg text-white bg-blue-400 hover:bg-blue-600 rounded-lg flex gap-3 justify-center items-center">
                        <p>Lihat Seluruhnya</p> <ChevronRight size={15} /></Link>
                </div>
                <Carousel className="w-max h-[50vh] flex items-center">
                    <CarouselContent className=" w-[40vw] flex- items-center rounded-lg">
                        {renderComponents}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}

export default TopDestination