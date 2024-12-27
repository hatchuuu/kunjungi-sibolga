import Footer from '@/components/Footer'
import prisma from '@/lib/prisma'
import Commentar from '@/components/Commentar'
import dayjs from 'dayjs'
import Image from 'next/image'

const KulinerPage = async ({ params: { id } }) => {

  const data = await prisma.makanan.findUnique(
    { where: { id: Number(id) } }
  )

  const dataComment = await prisma.comment.findMany({
    where: {
      idThis: Number(id),
      type: "makanan",
    }
  })

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
        <div className="flex flex-col items-center gap-20">
          <div className='flex flex-col gap-2 items-center justify-center'>
            <h1 className="text-5xl font-bold">{data?.nama}</h1>
            <h1 className="text-lg">Makanan Khas Kota Sibolga</h1>
          </div>
          <section className='flex justify-around items-center gap-10'>
            <div className='relative h-[40vh] w-full aspect-[5/3] rounded-[1rem]'>
            <Image width={400} height={400} priority src={`/image/${data?.gambar}`} alt={data?.nama} className='w-full h-full object-cover rounded-[1rem]' />
            </div>
            <div className='flex flex-col gap-5 rounded-lg p-8 border border-gray-400 shadow-lg'>
              <p className='text-2xl font-bold'>Deskrisi Singkat</p>
              <p>{data?.deskripsi[0]?.description}</p>
            </div>
          </section>
        </div>
        <section>
          <div className="flex flex-col gap-14 w-full">
            <h1 className='text-2xl font-bold'>Komentar</h1>
            <div className="flex flex-wrap gap-2">
              {renderComment.length > 0 ? renderComment : <p className="text-lg text-gray-500">Belum ada komentar</p>}
            </div>
            <Commentar idThis={data?.id} type="makanan" />
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default KulinerPage