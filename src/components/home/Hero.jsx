"use client"

import Link from "next/link"


const Hero = () => {


    const component = (image, title, link) => {
        return (
            <>
                <img
                    src={`/image/${image}`}
                    alt="Kota Sibolga"
                    className="saturate-200 object-cover h-full rounded-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <div className="absolute top-6 left-6">
                        <h1 className="text-white text-2xl font-bold">{title}</h1>
                    </div>
                    <div className="absolute bottom-6 left-6">
                        <Link href={link} className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition duration-300">
                            Kunjungi
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="bg-white">
            <main className="p-6">
                <section className="text-center  w-full px-4 py-10">
                    <h1 className="text-6xl font-bold text-black leading-normal">Mulai Perjalanan Menakjubkan</h1>
                    <h1 className="text-6xl font-bold text-black">Di Kota Sibolga</h1>
                </section>
                <section className="grid grid-rows-3 grid-flow-col gap-4 h-[70vh]">
                    <div className="relative mt-12 w-full col-span-2 row-span-2 group">
                        {component("pulauputri.jpg", "Pulau Putri", "/wisata/1")}
                    </div>
                    <div className="w-full relative group">
                        {component("pantaipandan.jpg", "Pantai Pandan", "/wisata/2")}
                    </div>
                    <div className="w-full relative group">
                        {component("jembatankuning.jpg", "Jembatan Kuning", "/wisata/3")}
                    </div>
                    <div className="mt-12  w-full relative group row-span-3">
                        {component("pulauponcan.jpg", "Pulau Poncan", "/wisata/4")}
                    </div>

                </section>
            </main>
        </div>

    )
}
export default Hero