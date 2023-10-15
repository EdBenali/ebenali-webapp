import 'styles/Footer.module.css'
import styles from 'styles/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.minor_footer_text}> Icons by:
                <a href="https://icons8.com/" 
                className="minor_footer_text hyperlink"> Icons8</a>
            </p>
        </footer>
    )
}

export default Footer
