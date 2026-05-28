import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero"

export function MainPage() {
    return (
        <main className="main_page">
            <div className="bg-bg dark:bg-(--color-dark-bg) fixed inset-0 -z-1 transition-all"></div>
            <div >
                <Header />
                <Hero />
            </div>
        </main>
    );
}
