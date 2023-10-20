function Header() {
    return (
         <header className="" >
            <NavBar />  
        </header>
    )
}

function NavBar() {
    return (
        <nav>
            <div className="flex p-2" >
                <NavButton link='#about' title="About" />
                <NavButton link='#projects' title="Projects" />
                <NavButton link='#contact' title="Contact Me" />
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
        <a className="p-2 hover:underline h-fit" href={link}>{title}</a>
    )
}

export default Header