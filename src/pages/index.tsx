import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar/navbar'
import { Hero } from '@/components/hero/hero'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>

      <Head>
        <title>Online zum Notar gehen - notarity</title>
      </Head>

      <Navbar />

      <Hero />



      <div className="body">
        <p className="subheader">Online beglaubigungen & Notariatsakte</p>
        <h1>Online zur Notar:in gehen</h1>
        <p>
        Signieren Sie Dokument bei unseren Partner-Notar:innen 100% online. Führen Sie Notariatsakte sowie die Beglaubigung von Unterschriften in nur wenigen Minuten online durch. Über notarity können Sie zu jeder Zeit und von überall zur Notar:in gehen.
        </p>

        <div className="features">
          <div className="feature">
            <h3>Netzwerk an Partner-Notarinnen und Notaren</h3>
            <p>Notar:innen sind im Umgang mit notarity und von online Dienstleistungen erfahren und geschult.</p>
          </div>
          <div className="feature">
            <h3>Beglaubigungen und Beurkundungen</h3>
            <p>Über notarity können fast alle Notariatsakte & Beglaubigungen online abgewickelt werden</p>
          </div>
          <div className="feature">
            <h3>Weltweit gültige Beglaubigungen</h3>
            <p>Online Beglaubigungen sind für viele Länder weltweit möglich</p>
          </div>
        </div>
      </div>

    </main>
  )
}
