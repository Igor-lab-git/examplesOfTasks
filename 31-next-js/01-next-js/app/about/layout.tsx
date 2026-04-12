import style from "./About.module.scss";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className={style.about_layout}>
            <main className="about_layout">
                {children}
            </main>
        </div>
    );
}