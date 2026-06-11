import dabubble from '../assets/img/dabubble.jpg'
import join from '../assets/img/join.jpg'
import polloLoco from '../assets/img/pollo-loco.jpg'
import ticTacToe from '../assets/img/tic-tac-toe.jpg'
export function MyProjects() {
    return (
        <section className='flex flex-col items-center gap-6' id='projects'>
            <h2 className='dark:text-white font-handjet font-semibold text-4xl'>{'<'}Meine Projekte{'/>'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0'>
                {projects.map((project) => (
                    <article key={project.title} className="flex flex-col items-center gap-4 px-4 py-8 rounded shadow-md inset-shadow-card backdrop-blur-md hover:shadow-lg hover:scale-101 transition">
                        <img src={project.image} className="w-full h-48 object-cover border border-text-rgba rounded" alt={project.imageAlt} loading="lazy"></img>
                        <h3 className="text-3xl underline text-orange-500">{project.title}</h3>
                        <ul className="flex flex-wrap justify-center gap-2">{project.technologies.map((technologie) => (
                            <li className="dark:text-white px-2 py-0.5 text-xs font-medium rounded-full bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.1)]" key={technologie}>{technologie}</li>
                        ))}</ul>
                        <p className="leading-5 dark:text-white">{project.explanation}</p>
                        <ProjectLinks frontendLink={project.frontendLink} backendLink={project.backendLink} liveDemoLink={project.liveDemoLink} />
                    </article>
                )
                )}
            </div>
        </section>
    );
}

function ProjectLinks({ frontendLink, backendLink, liveDemoLink }: LinksInterface) {
    const linkCSS = "basis-[calc(50%-0.5rem)] text-center text-blue-600 dark:text-blue-400 transition hover:underline";
    if (backendLink && backendLink != "") {
        return (
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 w-full" key={frontendLink}>
                <a className={linkCSS} href={backendLink}>Backend</a>
                <a className={linkCSS} href={frontendLink}>Frontend</a>
                <a className={linkCSS} href={liveDemoLink}>Live ansehen!</a>
            </nav>
        )
    } else {
        return (
            <nav key={frontendLink}>
                <a className={linkCSS} href={frontendLink}>Github</a>
                <a className={linkCSS} href={liveDemoLink}>Live ansehen!</a>
            </nav>
        )
    }
}

interface LinksInterface {
    frontendLink: string;
    backendLink: string;
    liveDemoLink: string;
}

const projects = [
    {
        title: 'DABubble',
        technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
        explanation: 'DABubble is a communication platform designed to enhance team collaboration, it is inspired by Slack.',
        frontendLink: 'https://github.com/PierreRudolph/DABubble',
        backendLink: '',
        liveDemoLink: 'https://pierre-lettner.de/DABubble/login',
        image: dabubble,
        imageAlt: 'Screenshot des Projektes DABubble'
    },
    {
        title: 'Join',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        explanation: 'Task manager inspired by the Kanban System. Create an organize tasks using drag and drop functions, assign users and categories.',
        frontendLink: 'https://github.com/PierreRudolph/Join',
        backendLink: '',
        liveDemoLink: 'https://pierre-lettner.de/Join/index.html',
        image: join,
        imageAlt: 'Screenshot des Projektes Join'
    },
    {
        title: 'El Pollo Loco',
        technologies: ['JavaScript', 'HTML', 'CSS', 'OOP'],
        explanation: 'Jump and Run Game',
        frontendLink: 'https://github.com/PierreRudolph/Ell_Polo_loco',
        backendLink: '',
        liveDemoLink: 'https://pierre-lettner.de/El-Pollo-Loco/index.html',
        image: polloLoco,
        imageAlt: 'Screenshot des Projektes El Pollo Loco'
    },
    {
        title: 'Algorithm based Ki',
        technologies: ['JavaScript', 'HTMl', 'CSS'],
        explanation: 'Classic Tic Tac Toe game, with self Concipated and Programmed Computer Enemy',
        frontendLink: 'https://github.com/PierreRudolph/TicTacToe',
        backendLink: '',
        liveDemoLink: 'https://pierre-lettner.de/Tic-Tac-Toe/index.html',
        image: ticTacToe,
        imageAlt: 'Screenshot des Projektes Tic Tac Toe'
    }
];
