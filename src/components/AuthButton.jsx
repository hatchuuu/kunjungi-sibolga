"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButtons() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex gap-2 justify-center items-center">
        <p className="text-white">{session.user?.name}</p>
        <button className="py-2 px-4 rounded-lg text-white bg-blue-600/50 hover:bg-blue-600/70" onClick={() => signOut()}>Keluar</button>
      </div>
    )
  }
  return <button className="py-2 px-4 rounded-lg text-black bg-white/70 hover:bg-white/90" onClick={() => signIn("google")}>Masuk dengan Google</button>
}