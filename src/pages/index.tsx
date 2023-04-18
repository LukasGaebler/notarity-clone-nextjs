import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="navbar">
        <div className="side left">
          <img src="notarity-logo_color-main.svg" />
        </div>
        <div className="side right">
          <div>GmbH Gründung</div>
          <div>Vollmacht</div>
          <div>Begalubigung</div>
          <div>Noariatsakt</div>
          <div>FAQ</div>
          <div className="start">Jetzt starten</div>
        </div>
      </div>


      <div className="hero">
        <p className="upper">Online dokumente bei Notar:innen signieren</p>
        <h1>Jederzeit und von überall</h1>
        <h1 className="subheader">Unternehmen gründen</h1>

        <h2>100% digital. 100% flexibel. 100% effizient.</h2>
        <p>Notariatstermine waren noch nie so einfach</p>
        <button>Termin buchen</button>
      </div>

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
