document.addEventListener("DOMContentLoaded", function() {
    const KEY = "e07afe55-e97c-4871-9a05-9525596b9b13";
    const form = document.querySelector("[data-js-form]");
    const buttonSubmit = document.querySelector("[data-js-form-button]");

    const errorMessage = {
        patternMismatch: ({title}) => title || `данные не соответствуют формату 🙃`, //true, если значение не соответствует регулярному выражению, установленному в
        valueMissing: ({title}) => `поле обязательное для заполнения 🙃`, //true, если поле пустое и оно помечено как обязательное (имеет атрибут required).
    };

    document.addEventListener("focus", function(event) {
        event.target.classList.add("focus");
        event.target.classList.remove("error-focus");
    }, {capture: true});

    document.addEventListener("blur", function(event) {
        const isFormField = event.target.closest("[data-js-form]");
        const isRequired = event.target.required;
        event.target.classList.add("error-focus");
        [...isFormField.elements].filter(el => !el.required)[1].classList.remove("error-focus");
        if(isFormField && isRequired) {
            const isValid = validateFieldControl(event.target);
            if(isValid) {
                event.target.classList.add("valid-focus");
            };
        };
        event.target.classList.remove("focus");
    }, {capture: true});

    function validateFieldControl(field) {
        const errorsObjectValidity = field.validity;
        const arrayErrorString = [];
        Object.entries(errorMessage).forEach(([key, getTextError]) => {
            if(errorsObjectValidity[key]) {
                arrayErrorString.push(getTextError(field));
            };
        });
        showErrorMessage(arrayErrorString, field);
        const isValid = arrayErrorString.length === 0;
        field.ariaInvalid = !isValid;
        return isValid;
    };

    function showErrorMessage(arrayError, field) {
        const containerField = field.parentElement.querySelector("[data-js-form-error-message]");
        containerField.innerHTML = arrayError.map((error) => {
            return `<span class="form__error-message" >${error}</span>`
        }).join("");
    };


    form.addEventListener("submit",  async (event) => {
        const formData = new FormData(event.target);
        formData.append("access_key", KEY);

        const required = [...event.target.elements].filter((field) => field.required === true);
        let invalidElement = null;

        required.forEach( (formElement) => {
            const isValidElement = validateFieldControl(formElement);

            if(!isValidElement) {
                event.preventDefault();
                formElement.classList.add("error-focus");
                if(!invalidElement) invalidElement = formElement;
                invalidElement.focus();
                return;
            };
        });

        const originalText = buttonSubmit.textContent;
        buttonSubmit.textContent = "Sending...";
        buttonSubmit.disabled = true;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                alert("Success! Your message has been sent.");
                form.reset();
            } else {
                alert("Error: " + data.message);
            }

        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            buttonSubmit.textContent = originalText;
            buttonSubmit.disabled = false;
        };
    });
});