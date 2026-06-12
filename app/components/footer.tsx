import { Mail } from "lucide-react";
import linkedin from "../assets/img/linkedin-logo.png"
import githubLogo from "../assets/img/github-logo.svg"

export function Footer() {
    return (
        <footer className="border-t border-text-rgba w-full backdrop-blur-md">
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between md:items-center md:px-10">
                <nav className="flex gap-4">
                    <a href="https://linkedin.com/in/pierre-rudolph-lettner" className={linksCSS} ><img className="w-5 h-5 dark:invert" src={linkedin}></img></a>
                    <a href="https://github.com/PierreRudolph" className={linksCSS} ><img className="w-5 h-5 dark:invert" src={githubLogo}></img></a>
                    <a href="mailto:mail@pierre-lettner.de" className={linksCSS}><Mail className="dark:invert w-5 h-5" /></a>
                </nav>
                <div className="lex flex-col items-center gap-1 md:items-end dark:text-white">
                    <p className="text-sm text-center">
                        Noch nicht fertiggestellt
                    </p>
                    <a className="text-sm text-center text-blue-600 dark:text-blue-400 transition hover:underline">Quellcode auf GitHub ansehen</a>
                    <p className="text-base text-center">© 2026 Pierre Lettner</p>
                </div>
            </div>
        </footer>
    );
}

const linksCSS = "transition hover:text-orange-500";