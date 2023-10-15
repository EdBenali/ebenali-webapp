import styles from "styles/Header.module.css"
import 'styles/globals.css'

function Header() {
    return (
         <header className={styles.header}>
            <NavBar />  
        </header>
    )
}

function NavBar() {
    return (
        <nav>
            <div className={styles.nav_container}>
                <img src="/mascot.png" />
                <NavButton link='/' title="Home" />
                <NavButton link='/projects' title="Projects" />
                <NavButton link='/about' title="About" />
            </div>
        </nav>
    )
}

interface NavButtonProps {
    link: string
    title: string
}

function NavButton ({link, title}: NavButtonProps) {

    return (
        <a className={styles.navbar_link} href={link}>{title}</a>
    )
}

export default Header