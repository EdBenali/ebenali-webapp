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
            <p className="float-left ml-4 mt-2 max-w-[45vw]">
                Edoardo Benali // Developer
            </p>
            <nav className="float-right mr-4 mt-2 max-w-[45vw]">
                    <NavButton link='#about' title="About" />
                    <NavButton link='#projects' title="Projects" />
                    <NavButton link='#contact' title="Contact" />
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
        <a className="pr-1 underline hover:text-orange-400 hover:transition-colors active:text-orange-400" href={link}>{title}</a>
    )
}

export default Header