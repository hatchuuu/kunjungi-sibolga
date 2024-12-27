import React from 'react'

const RunningText = () => {
    return (
        <section>
            <div className="relative overflow-hidden w-full p-3">
                <div className="flex animate-marquee space-x-8">
                    {/* Single content duplicated */}
                    <div className="text-xl text-gray-700 font-semibold flex-shrink-0 whitespace-nowrap">
                        Kota indah dan nyaman! 🌊🌴
                    </div>
                    <div className="text-xl text-gray-700 font-semibold flex-shrink-0 whitespace-nowrap">
                        Nikmati keindahan laut yang menarik! 🌟
                    </div>
                    <div className="text-xl text-gray-700 font-semibold flex-shrink-0 whitespace-nowrap">
                        Kembali kunjungi jika anda rindu! ☀️
                    </div>
                    {/* Duplicate content for seamless effect */}
                    <div className="text-xl text-gray-700 font-semibold flex-shrink-0 whitespace-nowrap">
                        Menjelajahi Kota Sibolga | Menemukan keindahan disana! 🌊🌴
                    </div>
                    <div className="text-xl text-gray-700 font-semibold flex-shrink-0 whitespace-nowrap">
                        Pemandangan yang indah | Air laut bersih nan asri! 🌟
                    </div>
                    <div className="text-xl text-gray-700 font-semibold flex-shrink-0 whitespace-nowrap">
                        Jangan lupakan waktu saat disanaaa! ☀️
                    </div>
                </div>
            </div>

        </section>
    )
}

export default RunningText