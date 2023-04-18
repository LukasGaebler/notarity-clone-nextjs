import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="navbar">
        <div className="side left">
          <div>Logo</div>
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

      </div>
    </main>
  )
}
