import { Header } from "../components/header/header";

export function MainPage() {
    return (
        <main className="main_page">
            <div className="bg-bg fixed inset-0 -z-1 transition-all"></div>
            <div >
                <Header />
            </div>
        </main>
    );
}
