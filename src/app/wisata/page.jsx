import Footer from '@/components/Footer'
import  prisma from '@/lib/prisma'
import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const DaftarPariwisata = async () => {
  const data = await prisma.wisata.findMany()

  const renderComponents = data?.map((items, i) => (
    <Link href={`/wisata/${items.id}`} key={i} className='w-full h-full border border-gray-600 shadow-md bg-white flex flex-col items-center rounded-2xl gap-5 p-5'>
      <div className="relative w-full h-full rounded-[1rem] ">
        <img src={`/image/${items.gambar}`} alt={items.nama} className='w-full h-full object-cover rounded-[1rem]' />
      </div>
      <div className='flex flex-col items-center w-full gap-2'>
        <div className='flex justify-between w-full'>
          <p className='text-xl font-bold'>{items.nama}</p>
          <div className='flex items-center'>
            <Star size={12} />
            <p>{items.rating}</p>
          </div>
        </div>
        <p className='text-base text-gray-600'>{items.lokasi}</p>
      </div>
    </Link>

  ))
  return (
    <>
      <div className="w-full sm:px-[16rem] px-[3rem] flex flex-col gap-24 my-40 bg-white">


        <section className="flex items-center justify-center w-full">
          <p className="text-5xl font-bold">DAFTAR PARIWISATA KOTA SIBOLGA</p>
        </section>

        <section className='grid grid-cols-2 sm:grid-cols-3 gap-10'>
          {renderComponents}
        </section>
      </div>
      <Footer />
    </>
  )
}

export default DaftarPariwisata