const formElement = document.querySelector("[data-js-form]");

class FormValidation {
  selectors = {
    form: "[data-js-form]",
    fieldErrors: "[data-js-form-field-errors]",
  };

  errorMessages = {
    valueMissing: () => "Пожалуйста заполните это поле 😳",
    patternMismatch: ({ title }) => title || "Данные не соответствуют формату 😳", // если title есть в разметко то возвращаем его иначе просто текст
    tooLong: ({ maxLength }) => `Слишком длинное заначение 😳 ограничение - ${maxLength}`, // тоже самое с динной строки просто добавляем к существуещей значение атрибута в разметке
    tooShort: ({ minLength }) => `Слишком короткое заначение 😳 минимум символов - ${minLength}`, // тоже самое с динной строки просто добавляем к существуещей значение атрибута в разметке
  };

  constructor() {
    this.bindEvents();
  };

  showErrors(fieldControlElement, errorMessages) {
    const spanErrorElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)

    spanErrorElement.innerHTML = errorMessages.map((message) => {
      return `<span class="field__error">${message}</span>`;
    }).join("");
  };

  validateElement(fieldControlElement) {
    const errors = fieldControlElement.validity;
    const errorMessages = [];
    
    Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
      if(errors[errorType]) {
        errorMessages.push(getErrorMessage(fieldControlElement));
      };
    });
    this.showErrors(fieldControlElement, errorMessages);

    const isValid = errorMessages.length === 0;
    fieldControlElement.ariaInvalid = !isValid //для установки ариа атрибута для скрин ридеров, состояние ariaInvalid будут true если isValid не истина тоесть не равна 0
    return isValid;
  };

  onBlur(e) {
    const isFormField = e.target.closest(this.selectors.form);
    const isRequired = e.target.required;
    
    if(isFormField && isRequired) {
      this.validateElement(e.target);
    };
  };

  onChage(e) {
    const isRequired = e.target.required; //проверка наличия атрибута
    const isToggleType = ["radio", "checkbox"].includes(e.target.type); //проверка является ли поля "radio" или"checkbox"
    if(isToggleType && isRequired) {
      this.validateElement(e.target);
    };
    
  };

  onSubmit(e) { //так как на форме есть атрибут novalidate то форма тправляется даже если ввод в поля не валидный 
    const isFormElements = e.target.matches(this.selectors.form);
    if(!isFormElements) {
      return;
    };

    const isRequired = [...e.target.elements].filter((element) => element.hasAttribute('required')); //массив полей обязательных для заполнения
    let isFormValid = true;
    let firstInvalidFieldControl = null;

    isRequired.forEach((field) => {
      const isFieldValid = this.validateElement(field); //если результат функции false для каждого поля с атрибутом required то в переменной isFieldValid false 
      
      if(!isFieldValid) {
        isFormValid = false;

        if(!firstInvalidFieldControl) { //если поле не валидно !isFieldValid и если firstInvalidFieldControl null нужно обновит значение firstInvalidFieldControl
          firstInvalidFieldControl = field; // присваиваем первое невалидное поле
        }
      };
    });

    if(!isFormValid) {
      e.preventDefault();
      firstInvalidFieldControl.focus(); // для естановки фокуса в первом найденом невалидном поле после отправки формы
      // Прокрутка к полю с ошибкой
      firstInvalidFieldControl.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  bindEvents() {
    document.addEventListener("change", (e) => this.onChage(e));
    document.addEventListener("submit", (e) => this.onSubmit(e));
    document.addEventListener("blur", (e) => this.onBlur(e), {capture: true}); // событие blur не отлавливается стандартно, поэтому ловим его на погружении для ловли его
  };
};

new FormValidation();