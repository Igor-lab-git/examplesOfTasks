const validateFormEmail = (email: string): string[] => {
    const arrayErrors = [];
    if(!email || email.trim().length === 0) {
        arrayErrors.push("Поле email обязательно для заполнения :(");
    }
    if(!email.includes("@")) {
        arrayErrors.push("Введите корректный email (должен содержать @)");
    };
    return arrayErrors;
};

const validateFormPassword = (password: string): string[] => {
    const arrayErrors = [];
    if(!password || password.trim().length === 0) {
        arrayErrors.push("Поле пароль обязательно для заполнения :(");
    }

    if(password.trim().length < 5) {
        arrayErrors.push("Пароль должен содеражать не менее 5 символов :(");
    }
    return arrayErrors;
};

export  { validateFormEmail, validateFormPassword };
