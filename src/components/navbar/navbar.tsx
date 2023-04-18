import { FC } from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import notarityLogo from "../../../public/notarity-logo_color-main.svg"

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {

}

export const Navbar: FC<NavbarProps> = ({

}) => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <div className={`${styles.side} ${styles.left}`}>
                    <Image src={notarityLogo} alt="logo" />
                </div>
                <div className={`${styles.side} ${styles.right}`}>
                    <div>GmbH Gründung</div>
                    <div>Vollmacht</div>
                    <div>Begalubigung</div>
                    <div>Noariatsakt</div>
                    <div>FAQ</div>
                    <div className={styles.start}>Jetzt starten</div>
                </div>
            </div>
        </div>
    )
}