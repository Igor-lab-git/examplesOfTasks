import {Sidebar} from "@/widgets/sidebar";
import style from "./main.module.scss";
import {Player} from "@/features/player";

export default function MainLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className={style.mainPage}>
            <Sidebar/>
            <div className={style.containerChildren}>
                {children}
            </div>
            <Player />
        </main>
    );
}