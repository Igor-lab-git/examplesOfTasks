const validateForm = (email: string, password: string): string[] => {
    const arrayErrors = [];
    if(!email || email.trim().length === 0) {
        arrayErrors.push("Поле email обязательно для заполнения :(");
    }
    if(!email.includes("@")) {
        arrayErrors.push("Введите корректный email (должен содержать @)");
    };

    if(!password || password.trim().length === 0) {
        arrayErrors.push("Поле пароль обязательно для заполнения :(");
    }

    if(password.trim().length < 5) {
        arrayErrors.push("Пароль должен содеражать не менее 5 символов :(");
    }
    return arrayErrors;
};

export default validateForm;
