'use client';
import React, {useState} from 'react';
import {LogoAuth} from "@/shared/ui/LogoAuth";
import AuthTitle from "@/features/auth/ui/AuthTitle";
import {NAVIGATION_AUTH_LINKS} from "@/shared/costants/navigation";
import AuthForm from "@/features/auth/ui/AuthForm";
import AuthRedirect from "@/shared/ui/AuthRedirect/ui/AuthRedirect";

const SignUpPageWrapperClient = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(true);

    return (
        <>
            <LogoAuth/>
            <AuthTitle title={NAVIGATION_AUTH_LINKS.signUp.title}/>
            <AuthForm
                isSignUp={isSignUp}/>
            <AuthRedirect
                accountQuestion={NAVIGATION_AUTH_LINKS.signUp.question}
                href={NAVIGATION_AUTH_LINKS.login.href}
                nameLink={NAVIGATION_AUTH_LINKS.login.label}/>
        </>
    )
};

export  default SignUpPageWrapperClient;
