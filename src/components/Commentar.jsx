"use client"

import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Commentar = ({ idThis, type }) => {
  const { data: session } = useSession()
  const [text, setText] = useState("")
  const router = useRouter()
  const handleInput = (e) => {
    setText(e)
  }

  const handleClick = async () => {
    const response = await fetch('/api/v1/comment',
      {
        method: "POST",
        body: JSON.stringify(
          {
            idThis: Number(idThis),
            type: type,
            email: session?.user?.email,
            username: session?.user?.name,
            comment: text
          })
      })
    setText("")
    if(response.ok) router.refresh()
  }

  if(session?.user == null) return null
  return (
    <section>
      <div className='w-full flex flex-col gap-5 items-end '>
        <textarea value={text} onChange={(e) => handleInput(e.target.value)} type="textarea" placeholder='Tulis komentar' className='w-full h-32 border border-gray-300 text-gray-800 rounded-md p-4' />
        <button onClick={handleClick} className='text-white py-2 px-4 w-fit rounded-md bg-blue-600 hover:bg-blue-700'>Kirim</button>
      </div>
    </section>
  )
}

export default Commentar