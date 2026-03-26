import { useState } from "react"
import Nav from "./Nav"
import { navLinks } from "../../data/navLinks"

export default function Header() {
    
    const navLinksEl = navLinks.map((link, index) => 
        <Nav href={link.href} section={link.section} key={index} hoverColor={link.hoverColor}/>
    )

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleClick() {
        setIsMenuOpen(prevStatus => !prevStatus)
    }

    return (
        <header>
            <div className="header__container">
                <div className="header__logo-container">   
                    <a href="/">
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19.5" cy="19.5" r="18.5" stroke="#212121" strokeWidth="2"/>
                            <path d="M24.01 9.6C24.79 9.86 25.46 10.33 26.02 11.01C26.58 11.69 26.86 12.35 26.86 12.99C26.86 13.63 26.44 14.49 25.6 15.57C24.78 16.63 23.77 17.69 22.57 18.75C21.39 19.79 20.2 20.81 19 21.81C17.8 22.81 16.78 23.7 15.94 24.48C15.12 25.26 14.71 25.77 14.71 26.01C14.71 26.25 14.78 26.44 14.92 26.58C15.06 26.72 15.25 26.79 15.49 26.79C16.55 26.79 18.24 26.63 20.56 26.31C22.9 25.97 24.41 25.8 25.09 25.8C25.77 25.8 26.11 26.04 26.11 26.52C26.11 27.16 24.86 27.8 22.36 28.44C19.86 29.06 17.34 29.37 14.8 29.37C14.04 29.37 13.34 29.03 12.7 28.35C12.08 27.65 11.77 26.97 11.77 26.31C11.77 25.63 12.2 24.79 13.06 23.79C13.94 22.77 14.99 21.74 16.21 20.7C17.45 19.66 18.68 18.63 19.9 17.61C22.88 15.15 24.37 13.49 24.37 12.63C24.37 12.25 23.91 11.94 22.99 11.7C22.09 11.44 21.12 11.31 20.08 11.31C19.06 11.31 18.11 11.39 17.23 11.55C16.37 11.69 15.84 11.76 15.64 11.76C15.2 11.76 14.77 11.53 14.35 11.07C13.93 10.61 13.72 10.19 13.72 9.81C13.68 9.45 14.34 9.14 15.7 8.88C16.4 8.76 17.21 8.7 18.13 8.7C20.25 8.7 22.21 9 24.01 9.6Z" fill="#212121"/>
                        </svg>
                        <svg className="logo-hover" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19.5" cy="19.5" r="18.5" stroke="#F8513A" strokeWidth="2"/>
                            <path d="M24.01 9.6C24.79 9.86 25.46 10.33 26.02 11.01C26.58 11.69 26.86 12.35 26.86 12.99C26.86 13.63 26.44 14.49 25.6 15.57C24.78 16.63 23.77 17.69 22.57 18.75C21.39 19.79 20.2 20.81 19 21.81C17.8 22.81 16.78 23.7 15.94 24.48C15.12 25.26 14.71 25.77 14.71 26.01C14.71 26.25 14.78 26.44 14.92 26.58C15.06 26.72 15.25 26.79 15.49 26.79C16.55 26.79 18.24 26.63 20.56 26.31C22.9 25.97 24.41 25.8 25.09 25.8C25.77 25.8 26.11 26.04 26.11 26.52C26.11 27.16 24.86 27.8 22.36 28.44C19.86 29.06 17.34 29.37 14.8 29.37C14.04 29.37 13.34 29.03 12.7 28.35C12.08 27.65 11.77 26.97 11.77 26.31C11.77 25.63 12.2 24.79 13.06 23.79C13.94 22.77 14.99 21.74 16.21 20.7C17.45 19.66 18.68 18.63 19.9 17.61C22.88 15.15 24.37 13.49 24.37 12.63C24.37 12.25 23.91 11.94 22.99 11.7C22.09 11.44 21.12 11.31 20.08 11.31C19.06 11.31 18.11 11.39 17.23 11.55C16.37 11.69 15.84 11.76 15.64 11.76C15.2 11.76 14.77 11.53 14.35 11.07C13.93 10.61 13.72 10.19 13.72 9.81C13.68 9.45 14.34 9.14 15.7 8.88C16.4 8.76 17.21 8.7 18.13 8.7C20.25 8.7 22.21 9 24.01 9.6Z" fill="#F8513A"/>
                        </svg>
                    </a>
                </div>

                <div>
                    <ul className="header__links">
                        {navLinksEl}
                    </ul>

                    <button className="header__hamburger" onClick={handleClick} aria-label="Toggle navigation">
                        <img
                        src={isMenuOpen ? "/svg/ham-menu-close.svg" : "/svg/ham-menu.svg" }
                        alt={isMenuOpen ? "close the hamburger menu" : "open the hamburger menu"}
                        />
                    </button>
                </div>
            </div>

            <div onClick={handleClick} className={isMenuOpen ? "header__small-nav" : "hidden"}>
                <ul>
                    {navLinksEl}
                </ul>
            </div>

        </header>
    )
}