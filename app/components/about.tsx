import img from '../assets/img/foto-grau.jpg';

export function AboutMe() {
    return (
        <section id='about' className="flex w-full flex-col md:flex-row items-center justify-center gap-4 rounded inset-shadow-card backdrop-blur-md p-7">
            <Pic></Pic>
            <div className="max-w-lg flex flex-col items-center gap-4 dark:text-white">
                <h2 className="font-handjet font-semibold text-4xl">{'<'}Über mich{'/>'}</h2>
                <p>Meine Name ist Pierre ich bin 34 Jahre alt, als Erfahrener Frontend-Entwickler habe ich bereits E</p>

            </div>
        </section>
    );
}

function Pic() {
    return <img className='rounded-4xl h-56' src={img} alt="Portrait des Entwicklers" loading='lazy'></img>
}