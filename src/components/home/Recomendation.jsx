import { Eye, Map, Package, Utensils } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Recomendation = () => {

    const data = [
        { "link": "/wisata", "title": "Jelajahi Wisata Alam", "desc": "Kunjungi setiap wisata alam yang ada di Sibolga", "icon": Map },
        { "link": "/kuliner", "title": "Coba Kuliner Khas", "desc": "Makanan Khas Sibolga yang selalu nikmat", "icon": Utensils },
        { "link": "/budaya", "title": "Melihat Budaya Lokal", "desc": "Pengalaman menonton langsung kebudayaan lokal disana", "icon": Eye },
        { "link": "/", "title": "Bawakan Oleh-Oleh untuk Keluarga", "desc": "Berikan kenangan manis kepada keluarga manis di rumah", "icon": Package },
    ]

    const renderComponents = data.map((item, i) => (
        <div key={i} className="flex flex-col items-center group cursor-pointer">
            <Link href={item.link} className=" text-4xl text-gray-700 group-hover:text-blue-600">
                <item.icon size={35} />
            </Link>
            <h3 className="mt-4 text-lg font-semibold">
                {item.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
            </p>
        </div>
    ))

    return (
        <section >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold">
                    Wajib anda coba di Kota Sibolga
                </h2>
                <p className="mt-2 text-gray-600">
                    Maksimalkan liburan anda selama di Sibolga
                </p>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {renderComponents}
                </div>
            </div>
        </section>
    )
}

export default Recomendation