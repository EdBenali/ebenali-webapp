function Header() {
    return (
         <header>
            <NavBar />  
        </header>
    )
}

function NavBar() {
    return (
        <div>
            <p className="w-fit float-left p-2 ml-6">
                Edoardo Benali // Developer
            </p>
            <nav className="w-fit float-right translate-y-2 mr-6">
                    <NavButton link='#about' title="About" />
                    <NavButton link='#projects' title="Projects" />
                    <NavButton link='#contact' title="Contact Me" />
            </nav>
        </div>
    )
}

interface NavButtonProps {
    link: string
    title: string
}

function NavButton ({link, title}: NavButtonProps) {

    return (
        <a className="p-2 hover:underline" href={link}>{title}</a>
    )
}

export default Header