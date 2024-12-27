import Link from 'next/link'
import React from 'react'
import ToolTip from './ToolTip'
import { Mails, MapPin, Rss } from 'lucide-react'
import { Separator } from './ui/separator'

const Footer = () => {
    return (
        <section>
            <div className="w-full h-[30vh] flex flex-col py-5 gap-8 justify-center items-center bg-black text-white px-[12rem]">
                <div className="flex justify-between items-center w-full">
                    <div >
                        <p className="text-2xl font-bold">SIBOLGA - KOTA IKAN</p>
                        <p>Sibolga Na uli, Sibolga berbilang kaum</p>
                    </div>
                    <div className="flex gap-10">
                        <ToolTip label="lokasi">
                            <Link href="https://maps.app.goo.gl/YbAR63FABZhn3U1T7">
                                <MapPin size={23} />
                            </Link>
                        </ToolTip>
                        <ToolTip label="website resmi">
                            <Link href="https://sibolgakota.go.id/">
                                <Rss size={23} />
                            </Link>
                        </ToolTip>
                        <ToolTip label="hubungi">
                            <Link href="https://sibolgakota.go.id/app/">
                                <Mails size={23} />
                            </Link>
                        </ToolTip>
                    </div>
                </div>
                <Separator className="w-full h-[2px]" />
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <p className="italic">Sai uli ni Sibolga lam tarida di na mamio Taruli ma burjum tu saluhut bangso. Sibolga, Sibolga, Sibolga na uli …..</p>
                    <p>- Uli Ni Sibolga -</p>

                </div>
            </div>
        </section>
    )
}

export default Footer