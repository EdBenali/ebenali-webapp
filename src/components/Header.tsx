import "../assets/Header.css"

function Header() {
    return (
         <header className='header'>
            <NavBar />  
        </header>
    )
}

function NavBar() {
    return (
        <nav>
            <div className="nav-container">
                <img src="/src/assets/mascot.png" />
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
        <a className="navbar-link" href={link}>{title}</a>
    )
}

export default Header