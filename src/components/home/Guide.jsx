import { Car, Clock, Hotel, Luggage } from 'lucide-react'
import React from 'react'

const Guide = () => {

    const data = [
        { title: "Pilih Waktu yang Tepat", detail: "Kunjungi Sibolga di musim kemarau (April–Oktober) untuk menikmati cuaca cerah dan pemandangan indah.", icon: Clock },
        { title: "Pemesanan Penginapan", detail: "Pilih akomodasi dekat pusat kota atau tepi pantai seperti hotel, homestay, atau vila yang banyak tersedia di Sibolga.", icon: Hotel },
        { title: "Transportasi", detail: "Dari Medan: Naik bus atau travel yang memakan waktu sekitar 8–10 jam. Pesawat: Terbang menuju Bandara Dr. Ferdinand Lumban Tobing di Pinangsori, sekitar 45 menit berkendara ke Sibolga.", icon: Car },
        { title: "Bawaan Penting", detail: "Siapkan pakaian santai, topi, kacamata hitam, sunscreen, dan perlengkapan untuk bermain di pantai.", icon: Luggage },
    ]
    const renderData = data.map((item, index) => (
        <div key={index} className="group w-full rounded-xl gap-5 border h-[15vh] p-10 flex items-center hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-[4px_4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300">
            <div className="flex flex-col gap-4 w-full">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <h2>{item.detail}</h2>
            </div>
            <div>
                <item.icon size={32} />
            </div>
        </div>
    ))

    return (
        <section>
            <div className="flex flex-col gap-14  w-full">
                <h1 className="text-6xl font-bold">Panduan Perjalanan</h1>
                <div className="grid grid-cols-2 gap-5">

                    {
                        renderData
                    }

                </div>
            </div>
        </section>
    )
}

export default Guide