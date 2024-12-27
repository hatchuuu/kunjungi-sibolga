import Footer from '@/components/Footer'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import prisma from '@/lib/prisma'
import React from 'react'

const page = async() => {

const data = await prisma.wisata.findMany()

const renderTable = data?.map((d)=>(
    <TableRow key={d.id}>
    <TableCell className="font-medium">{d.nama}</TableCell>
    <TableCell>{d.lokasi}</TableCell>
    <TableCell>{d.lokasiMap}</TableCell>
    <TableCell>{d.deskripsi[0].description}</TableCell>
    <TableCell className="flex justify-end gap-5">
        <button className='bg-yellow-500 text-white py-2 px-4 rounded-lg'> Edit </button>
        <button className='bg-red-500 text-white py-2 px-4 rounded-lg'> Hapus </button>
    </TableCell>
</TableRow>
))

    return (
        <>
            <div className="w-full sm:px-[16rem] px-[3rem] gap-40 flex flex-col my-32 bg-white ">
                <h1 className="text-5xl font-bold text-center w-full">Admin Dashboard</h1>
                <div className='flex flex-col gap-12 items-center w-full'>
                    <div className='flex gap-5 items-center w-full justify-end'>
                        <input type="text" className='w-full h-10 p-2 rounded-lg border border-gray-400' />
                        <button className="rounded-lg text-white px-6 py-2 h-10 bg-blue-600/90 hover:bg-blue-600">Cari</button>
                    </div>
                    <div className='w-full'>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Nama Wisata</TableHead>
                                    <TableHead>Lokasi</TableHead>
                                    <TableHead>Embedded Map</TableHead>
                                    <TableHead>Penjelasan</TableHead>
                                    <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                               {renderTable}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page