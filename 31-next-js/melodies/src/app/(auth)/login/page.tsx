import React from 'react'
import {LogoAuth} from "@/shared/ui/LogoAuth";
import AuthForm from "@/features/auth/ui/AuthForm";
import AuthRedirect from "@/shared/ui/AuthRedirect/ui/AuthRedirect";
import AuthTitle from "@/features/auth/ui/AuthTitle";
import {AUTH_PAGES_CONFIG, NAVIGATION_AUTH_LINKS} from "@/shared/costants/navigation";
import style from "../authMain.module.scss";

const LoginPage = () => {
    return (
        <section className={style.sectionLoginPage}>
            <LogoAuth />
            <AuthTitle
                title={AUTH_PAGES_CONFIG.login.title}/>
            <AuthForm />
            <AuthRedirect
                accountQuestion={AUTH_PAGES_CONFIG.login.question}
                href={NAVIGATION_AUTH_LINKS.signUp.href}
                nameLink={NAVIGATION_AUTH_LINKS.signUp.label}/>
        </section>
    )
};

export default LoginPage;
