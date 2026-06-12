import { Sun, Moon } from "lucide-react";
import { useState } from "react";


export function Header() {
    return (
        <header className="w-full border-b border-text-rgba sticky top-0 backdrop-blur-md z-10">
            <div className="header_content">
                <div>
                    <div>
                        <Logo></Logo>
                    </div>
                </div>
                <nav className="hidden md:flex gap-6 dark:text-white">
                    <a className="transition-all hover:border-b" href="#about">Über mich</a>
                    <a className="transition-all hover:border-b" href="#skills">Skills</a>
                    <a className="transition-all hover:border-b" href="#projects">Projekte</a>
                    <a className="transition-all hover:border-b" href="#contact">Kontakt</a>
                </nav>
                <div className="hidden md:flex items-center gap-3">

                    <nav>
                        <button className="px-2 py-1 rounded text-sm font-medium transition hover:cursor-pointer hover:bg-hover-switch dark:text-white">EN</button>
                        <button className="px-2 py-1 rounded text-sm font-medium transition hover:cursor-pointer hover:bg-hover-switch dark:text-white">DE</button>
                    </nav>
                    <ButtonChangeTheme></ButtonChangeTheme>
                </div>

            </div>

        </header>
    );
}

function ButtonChangeTheme() {
    const [active, setActive] = useState(false);

    return (
        <button onClick={() => { changeColorTheme(), setActive(!active) }} className="p-2 rounded bg-switch hover:bg-hover-switch text-text flex items-center gap-2 transition-all hover:cursor-pointer inset-shadow-card shadow-md hover:shadow-lg">
            {active ? <Sun /> : <Moon />}
        </button>
    )
}

function changeColorTheme() {
    let htmlDoc: HTMLElement | null = document.getElementById('html-element');
    if (!htmlDoc)
        return;
    if (htmlDoc.classList.contains('dark')) {
        htmlDoc.classList.replace('dark', 'light');
    } else {
        htmlDoc.classList.replace('light', 'dark');
    }
}

function Logo() {
    return (<svg
        viewBox="0 0 240 100"
        xmlns="http://www.w3.org/2000/svg"
        className="header_logo"
        role="img"
        aria-label="Portfolio-Logo"
    >
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                    offset="0%"
                    style={{
                        stopColor: "rgb(255, 107, 107)",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset="100%"
                    style={{
                        stopColor: "rgb(255, 217, 61)",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>

            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                    offset="0%"
                    style={{
                        stopColor: "rgb(107, 203, 119)",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset="100%"
                    style={{
                        stopColor: "rgb(77, 150, 255)",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>

            <style>
                {`
            .retro-text {
              font-family: 'Handjet', display;
              font-size: 120px;
              font-weight: bold;
              fill: url(#gradient);
              text-shadow: 2px 2px #00000050;
            }

            .retro-subtext {
              font-family: 'Handjet', display;
              font-size: 54px;
              font-weight: bold;
              fill: url(#gradient2);
              text-shadow: 2px 2px #00000050;
              letter-spacing: 3px;
            }
          `}
            </style>
        </defs>

        <text
            x="0"
            y="60%"
            dominantBaseline="middle"
            textAnchor="start"
            className="retro-text"
        >
            PL
        </text>

        <text
            x="90%"
            y="30%"
            dominantBaseline="middle"
            textAnchor="end"
            className="retro-subtext"
        >
            Pierre
        </text>

        <text
            x="100%"
            y="75%"
            dominantBaseline="middle"
            textAnchor="end"
            className="retro-subtext"
        >
            Lettner
        </text>
    </svg>)
}
