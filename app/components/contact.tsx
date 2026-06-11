import { Send, Mail } from "lucide-react";
import linkedin from "../assets/img/linkedin-logo.png"
import githubLogo from "../assets/img/github-logo.svg"

export function Contact() {
    return (
        <section>
            <h2 className='text-orange-500 font-handjet font-semibold text-4xl'>{'<'}Kontakt aufnehmen{'/>'}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-text-rgba border border-text-rgba w-full rounded shadow-md inset-shadow-card backdrop-blur-md">

                <div className="flex flex-col gap-8 py-10 px-6">
                    <h3 className="text-2xl text-rose-500 font-semibold mb-6 underline">Lass uns zusammenarbeiten</h3>
                    <p className="dark:text-white">
                        Ich freue mich immer über neue Kontakte und spannende Projekte. Schreib mir einfach über das Formular oder verbinde dich mit mir auf LinkedIn oder per E-Mail.

                    </p>
                    <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 w-full">
                        <a href="https://linkedin.com/in/pierre-rudolph-lettner" className={linksCSS} ><img className="w-5 h-5 dark:invert" src={linkedin}></img><span className="dark:text-white">LinkedIn</span></a>
                        <a href="https://github.com/PierreRudolph" className={linksCSS} ><img className="w-5 h-5 dark:invert" src={githubLogo}></img><span className="dark:text-white">GitHub</span></a>
                        <a href="mailto:mail@pierre-lettner.de" className={linksCSS}><Mail className="dark:invert w-5 h-5" /><span className="dark:text-white">E-Mail</span></a>
                    </nav>
                </div>

                <div className="py-10 px-6">
                    <form className="w-full">
                        <fieldset className="flex flex-col gap-4">
                            <legend className="text-2xl text-rose-500 font-semibold mb-6 underline">Kontaktiere mich direkt</legend>
                            <div className="flex flex-col gap-1 dark:text-white">
                                <label className="text-left">Wie heißt du?</label>
                                <input className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg"></input>
                            </div>
                            <div className="flex flex-col gap-1 dark:text-white">
                                <label className="text-left ">Wie lautet deine E-Mail?</label>
                                <input className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg "></input>
                            </div>
                            <div className="flex flex-col gap-1 dark:text-white">
                                <label className="text-left ">Wie kann ich dir helfen?</label>
                                <textarea className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg "></textarea>
                            </div>
                        </fieldset>
                        <button className="flex items-center gap-2 mt-6 border px-4 py-2 rounded transition opacity-50 cursor-not-allowed dark:text-white">Nachricht senden <Send /> </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

const linksCSS = "flex justify-center items-center basis-[calc(50%-0.5rem)] gap-1 border rounded backdrop-blur-md py-2 transition hover:scale-101 hover:shadow-lg dark:border-white";