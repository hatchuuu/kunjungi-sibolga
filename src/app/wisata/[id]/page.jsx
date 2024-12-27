import Footer from '@/components/Footer'
import MapSibolga from '@/components/maps/MapSibolga'
import prisma from '@/lib/prisma'
import Commentar from '@/components/Commentar'
import dayjs from 'dayjs'
import Image from 'next/image'

const Page = async ({ params: { id } }) => {

    const data = await prisma.wisata.findUnique(
        { where: { id: Number(id) } }
    )

    const dataComment = await prisma.comment.findMany({
        where: {
            idThis: Number(id),
            type: "wisata",
        }
    })

    const renderComponents = data?.deskripsi?.map((items, i) => (
        <div key={i} className="flex flex-col gap-5 ">

            <h1 className={`text-3xl font-bold ${i == 0 ? "hidden" : "block"}`}>{items?.title}</h1>
            <h1 className="text-base text-justify">{items?.description}</h1>
        </div>
    ))

    const renderComment = dataComment?.map((d, i) => (
        <div
            key={i}
            className="w-[49%] border border-gray-300 shadow-md flex flex-col gap-3 rounded-lg p-5"
        >
            <div className="flex justify-between w-full">
                <p className="text-lg font-bold text-gray-700">{d.username}</p>
                <p className="text-base text-gray-700">{dayjs(d.createdAt).format("DD-MM-YYYY")}</p>
            </div>
            <p className="text-gray-700 break-words">{d.comment}</p>
        </div>

    ))

    return (
        <>
            <div className="w-full sm:px-[16rem] px-[3rem] flex flex-col gap-24 my-40 bg-white">
                {/* image section */}
                <section className="w-full h-[60vh] flex flex-col gap-10 rounded-[1rem]">
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-5xl font-bold">{data?.nama}</p>
                        <p className="text-lg text-gray-600">{data?.lokasi}</p>
                    </div>
                    <div className="w-full h-full relative">
                    <Image width={400} height={400} priority alt={data?.nama} src={`/image/${data?.gambar}`} className="w-full h-full object-cover saturate-200 rounded-[1rem]" />
                    </div>
                </section>

                {/* main section */}
                <section className="grid grid-cols-3 gap-5 mt-20 place-content-start place-items-start">
                    <section className="flex flex-col gap-10 col-span-2">
                        {renderComponents}
                    </section>
                    <section className="flex flex-col w-full gap-5 ">
                        <div className=" w-full relative p-2 aspect-square border border-gray-600 rounded-lg bg-white">
                            <div className=" object-cover relative w-full rounded-lg">
                                <MapSibolga link={data?.lokasiMap} />
                            </div>
                            <p className="text-lg font-semibold mt-5 mb-3">Lokasi {data?.nama}</p>
                            <p className="italic text-base mb-5">{data?.lokasi}</p>
                        </div>
                    </section>
                </section>
                <section>
                    <div className="flex flex-col gap-14 w-full">
                        <h1 className='text-2xl font-bold'>Komentar</h1>
                        <div className="flex flex-wrap gap-2">
                            {renderComment.length > 0 ? renderComment : <p className="text-lg text-gray-500">Belum ada komentar</p>}
                        </div>
                        <Commentar idThis={data?.id} type="wisata" />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Page;