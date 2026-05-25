"use client";
import React, {useId, useState} from 'react'
import ButtonAuthForm from "@/shared/ui/ButtonAuth/ui/ButtonAuthForm";
import InputLogin from "@/shared/ui/InputAuth/ui/InputLogin";
import iconLetter from "../../../shared/assets/icons/auth/icon-letter.svg";
import iconPassword from "../../../shared/assets/icons/auth/icon-password.svg";
import style from "./LoginForm.module.scss";
import {AUTH_PAGES_CONFIG} from "@/shared/costants/navigation";
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation";
import {setValueLocalStorage} from "@/shared/lib/storage/storage";
import {useLoginMutation} from "@/store/redusers/melodiesStoreApi";
import {setCredentialsActionSlice} from "@/store/redusers/authSlice";

interface IAuthForm {
    isSignUp?: boolean
};

const AuthForm = ({isSignUp}: IAuthForm) => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch();
    const router = useRouter();

    const loginId = useId();
    const passwordId = useId();
    const nameId = useId();

    const [loginMutation, {data}] = useLoginMutation();

    const buttonName = isSignUp ? AUTH_PAGES_CONFIG.signUp.buttonName : AUTH_PAGES_CONFIG.login.buttonName;

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await loginMutation({
                login,
                password,
                rememberMe: true
            }).unwrap();

            setValueLocalStorage('accessToken', response.accessToken);
            setValueLocalStorage('refreshToken', response.refreshToken);
            dispatch(setCredentialsActionSlice({
                accessToken: response.accessToken,
                refreshToken: response.refreshToken,
                user: {loginName: login}
            }));

            setLogin('');
            setPassword('');
                router.push("/");

        } catch (e) {
            console.error(e);
        }
    };

    const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // console.log(login, password)

    return (
        <>
            <form
                className={style.form}
                onSubmit={handleLogin}>

                {isSignUp && (
                    <InputLogin
                        id={nameId}
                        typeInput={"Name"}
                        labelInput={"Name"}
                        autoComplete={"new-password"}
                        iconLetter={iconPassword}
                        placeholderInput={"Enter Your Name"}/>
                )}
                <InputLogin
                    value={login}
                    onChange={(e) => handleLoginInput(e)}
                    id={loginId}
                    typeInput={"text"}
                    labelInput={"Login"}
                    autoComplete={"new-password"}
                    iconLetter={iconLetter}
                    placeholderInput={"Enter Your Login"}/>

                <InputLogin
                    value={password}
                    onChange={(e) => handlePasswordInput(e)}
                    id={passwordId}
                    typeInput={"password"}
                    labelInput={"Password"}
                    autoComplete={"new-password"}
                    iconLetter={iconPassword}
                    placeholderInput={"Enter Your PassWord"}/>

                <ButtonAuthForm buttonName={buttonName}/>
            </form>
        </>
    )
};

export default AuthForm;
