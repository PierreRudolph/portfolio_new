import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { AboutMe } from "~/components/about";
import { Skills } from "~/components/skills";
import { GatterBg } from "~/components/subComponents/gatter_bg";
import { FloatingRects } from "~/components/subComponents/floating_rects";
import { MyProjects } from "~/components/myProjects";


export function MainPage() {
    return (
        <div>
            <div className="bg-bg dark:bg-(--color-dark-bg) fixed inset-0 -z-1 transition-all">
                <GatterBg />
                <FloatingRects />
            </div>
            <Header />
            <main className="main_page">
                <div className="fixed inset-0 -z-1 transition-all"></div>
                <div className="max-w-7xl w-full mx-auto grid grid-cols-1 gap-8 text-center pb-6.25 sm:px-6.25">
                    <Hero />
                    <AboutMe />
                    <Skills />
                     <MyProjects /> 
                </div>
            </main>
            <Footer />
        </div>

    );
}
