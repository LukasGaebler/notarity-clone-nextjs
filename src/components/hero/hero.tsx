import { FC } from "react";
import styles from "./hero.module.scss";

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {

}

export const Hero: FC<HeroProps> = ({

}) => {
    return (
        <div className={styles.hero}>
            <p className={styles.upper}>Online dokumente bei Notar:innen signieren</p>
            <h1>Jederzeit und von überall</h1>
            <h1 className={styles.subheader}>Unternehmen gründen</h1>

            <h2>100% digital. 100% flexibel. 100% effizient.</h2>
            <p>Notariatstermine waren noch nie so einfach</p>
            <button>Termin buchen</button>
      </div>
    );
}