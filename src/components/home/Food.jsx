import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Food = () => {

    const data = [
        { "title": "Arsik", "image": "/image/arsik.webp", "desc": "Arsik adalah makanan khas Kota Sibolga yang terbuat dari ikan panggang dan ...", "link": "/kuliner/1" },
        { "title": "Daun Ubi Tumbuk", "image": "/image/daunubitumbuk.jpg", "desc": "Daun ubi tumbuk adalah makanan khas Kota Sibolga yang terbuat dari daun ubi yang dihaluskan dan ...", "link": "/kuliner/2" },
        { "title": "Ikan Panggang Geleng", "image": "/image/ikanpangganggeleng.jpeg", "desc": "Ikan panggang geleng adalah makanan khas yang terbuat dari ikan panggang yang ...", "link": "/kuliner/3" },
    ]

    const renderComponents = data.map((d, i) => (
        <div key={i} className="flex flex-col gap-5 items-center justify-center group ">
            <Link href={d.link} className="relative h-64 w-64 p-2 rounded-full group-hover:scale-110 group-hover:shadow-md transition-transform duration-300  border border-gray-400">
            <Image width={400} height={400} prioritysrc={d.image} alt={d.title} className='object-cover h-full w-full rounded-full' />
            </Link>
            <p className="font-bold text-xl group-hover:text-2xl transition-transform duration-300">{d.title}</p>
            <p className="text-center text-base">{d.desc}</p>
        </div>
    ))
    return (
        <section>
            <div className="flex flex-col gap-20 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-5xl font-bold">Makanan Khas Kota Sibolga</h1>
                    <h1 className="text-lg">Rekomendasi Makanan Khas Kota Sibolga yang wajib anda coba
                        <Link href={"/kuliner"} className="hover:text-blue-600 underline cursor-pointer ms-1">Lihat selengkapnya</Link>
                    </h1>

                </div>
                <div className="flex justify-around items-center ">
                    {renderComponents}
                </div>
            </div>
        </section>
    )
}

export default Food