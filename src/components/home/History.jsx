import React from 'react'
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/maps/MapSibolga"), { ssr: false })
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { ArrowRightLeft, Fish, Locate, MapPin, Users, UtensilsCrossed, Waves } from 'lucide-react';
const History = () => {
    return (

        <section>
            <div className="flex flex-col gap-16">
                <div className="flex sm:flex-row flex-col gap-12">
                    <div className="flex w-full flex-col justify-center items-center ">
                        <Card className="group w-[30vw] relative p-2">
                            <CardContent className="transition-transform duration-1000 object-cover relative p-2">
                                <DynamicMap link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31886.511640924702!2d98.74723772952743!3d1.7378956693481348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302dbcf155555555%3A0x7573e9819237370e!2sSibolga%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"/>
                            </CardContent>
                        </Card>
                        <div className="w-full text-center mt-3">Lokasi Kota Sibolga</div>
                    </div>
                    <div className='flex flex-col gap-8 mt-5'>
                        <h1 className='text-5xl font-bold'>Sibolga</h1>
                        <h2 className="text-xl leading-relaxed text-justify">
                            merupakan kota kecil nan mempesona di pesisir barat Sumatra Utara, menawarkan kekayaan alam dan budaya yang sulit ditemukan di tempat lain. Berjarak sekitar 350 km dari Medan, kota ini memiliki luas hanya 10,77 km², menjadikannya kota terkecil di Indonesia.
                        </h2>
                        <ul className='text-lg flex flex-col gap-4 ms-4'>
                            <div className='flex gap-5 items-center py-2 px-4 hover:bg-blue-100 duration-300 transition-opacity rounded-md border border-gray-300 hover:shadow-lg'>
                                <ArrowRightLeft size={15} />
                                <p>Kota pelabuhan strategis yang menghubungkan Sumatra dengan Pulau Nias.</p>
                            </div>
                            <div className='flex gap-5 items-center py-2 px-4 hover:bg-blue-100 duration-300 transition-opacity rounded-md border border-gray-300 hover:shadow-lg'>
                                <Fish size={15} />
                                <p>Dijuluki "Kota Ikan," surga bagi pecinta seafood.</p>
                            </div>
                            <div className='flex gap-5 items-center py-2 px-4 hover:bg-blue-100 duration-300 transition-opacity rounded-md border border-gray-300 hover:shadow-lg'>
                                <Waves size={15} />
                                <p>Menyajikan panorama laut, lereng bukit, dan keindahan Teluk Tapian Nauli.</p>
                            </div>
                            <div className='flex gap-5 items-center py-2 px-4 hover:bg-blue-100 duration-300 transition-opacity rounded-md border border-gray-300 hover:shadow-lg'>
                                <UtensilsCrossed size={15} />
                                <p>Hidangan khas seperti nasi tua dan olahan ikan asin yang terkenal.</p>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History