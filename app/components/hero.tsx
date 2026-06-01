import { MatrixCanvasEffect } from "./matrixCanvas";

export function Hero() {
    return (
        <section className=" relative w-full py-35 border-b border-text-rgba">
            <div className="flex flex-col items-center justify-center">
                <p className="dark:text-white">{'<'}hi, ich bin Pierre 👋{"/>"}</p>
                <h1 className="font-handjet font-bold text-6xl text-orange-500">Frontend Entwickler</h1>
                <p className="dark:text-white">{'<'}Erfahrener Frontend-Enwtickler auf moderne,
                    responsive und benutzerfreundliche Frontends{'/>'}</p>

            </div>
            <MatrixCanvasEffect />

        </section>


    );


}