
export function Skills() {
    return (
        <section className="flex flex-col items-center gap-4 px-2 sm:px-0">
            <h2 className="dark:text-white">{'<'}Meine Skills{'/>'}</h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6 w-full">
                {skills.map((skill) => (
                    <li key={skill.label} className="flex flex-col items-center gap-2 p-4 rounded shadow-md inset-shadow-card backdrop-blur-md hover:shadow-lg hover:scale-105 transition">
                        <img src={skill.icon} alt={skill.label + "Logo"} className="w-12 h-12" loading="lazy"></img>
                        <span className="dark:text-white">{skill.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const skills = [
    {
        icon: "app/assets/img/angular_logo.svg",
        label: 'JavaScript',
    },
    {
        icon: "app/assets/img/typescript_logo.svg",
        label: 'TypeScript',
    },
    {
        icon: "app/assets/img/python_logo.svg",
        label: 'Python'
    },
    {
        icon: "app/assets/img/css_logo.svg",
        label: 'CSS'
    },
    {
        icon: "app/assets/img/sass_logo.svg",
        label: 'SASS'
    },
    {
        icon: "app/assets/img/html_logo.svg",
        label: 'HTML'
    },
    {
        icon: "app/assets/img/angular_logo.svg",
        label: 'Angular'
    },
    {
        icon: "app/assets/img/react_logo.svg",
        label: 'React'
    },
    {
        icon: "app/assets/img/django_logo.svg",
        label: 'Django'
    },
    {
        icon: "app/assets/img/tailwind_logo.svg",
        label: 'Tailwind'
    },
    {
        icon: "app/assets/img/git_logo.svg",
        label: 'Git'
    },
    {
        icon: "app/assets/img/vite_logo.svg",
        label: 'Vite'
    },
    {
        icon: "app/assets/img/restapi_logo.svg",
        label: 'REST-API'
    },
    {
        icon: "app/assets/img/sqlite_logo.svg",
        label: 'SQLite'
    },
    {
        icon: "app/assets/img/postgresql_logo.svg",
        label: 'PostgreSQL'
    },
    {
        icon: "app/assets/img/redis_logo.svg",
        label: 'Redis'
    },
    {
        icon: "app/assets/img/linux_logo.svg",
        label: 'Linux'
    }
]