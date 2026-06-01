import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { AboutMe } from "~/components/about";
import { Skills } from "~/components/skills";

export function MainPage() {
    return (
        <div>
            <Header />
            <main className="main_page">
                <div className="bg-bg dark:bg-(--color-dark-bg) fixed inset-0 -z-1 transition-all"></div>
                <div className="max-w-7xl w-full mx-auto grid grid-cols-1 gap-8 text-center pb-6.25 sm:px-6.25">
                    <Hero />
                    <AboutMe></AboutMe>
                    <Skills></Skills>
                </div>
            </main>
            <Footer />
        </div>

    );
}
