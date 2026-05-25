import style from "./authMain.module.scss"

export default function MainLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={style.layoutAuth}>
            {children}
        </div>
    );
};