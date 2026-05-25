import React from 'react';
import style from "@/app/(auth)/authMain.module.scss";
import SignUpPageWrapperClient from "@/features/SignUpPageWrapperClient/ui/SignUpPageWrapperClient";

const SignUpPage = () => {

    return (
        <section className={style.sectionLoginPage}>
            <SignUpPageWrapperClient />
        </section>
    )
};

export default SignUpPage;
