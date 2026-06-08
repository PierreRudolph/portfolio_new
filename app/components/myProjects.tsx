import type { Key } from "react";

export function MyProjects() {
    return (
        <section>
            {projectArray.map((project) => (
                <div key={project.title}>
                    <img src={project.imagePath}></img>
                    <div>
                        <h3>{project.title}</h3>
                        <div>{project.technologies.map((technologie) => (
                            <span key={technologie}>{technologie}</span>
                        ))}</div>
                        <p>{project.explanation}</p>
                        <ProjectLinks frontendLink={project.frontendLink} backendLink={project.backendLink} liveDemoLink={project.liveDemoLink} />
                    </div>
                </div>
            )
            )}

        </section>
    );
}

function ProjectLinks({ frontendLink, backendLink, liveDemoLink }: LinksInterface) {
    if (backendLink && backendLink != "") {
        return (
            <div key={frontendLink}>
                <a href={backendLink}>Backend</a>
                <a href={frontendLink}>Frontend</a>
                <a href={liveDemoLink}>Live ansehen!</a>
            </div>
        )
    } else {
        return (
            <div key={frontendLink}>
                <a href={frontendLink}>Github</a>
                <a href={liveDemoLink}>Live ansehen!</a>
            </div>
        )
    }
}

interface LinksInterface {
    frontendLink: string;
    backendLink: string;
    liveDemoLink: string;
}

const projectArray = [
    {
        title: 'DABubble',
        technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
        explanation: 'DABubble is a communication platform designed to enhance team collaboration, it is inspired by Slack.',
        frontendLink: 'https://github.com/PierreRudolph/DABubble',
        backendLink: '',
        liveDemoLink: 'https://pierre-lettner.de/DABubble/login',
        imagePath: 'app/assets/img/DABubble.svg'
    },
];
