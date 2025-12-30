const form = document.forms[0];
const isCheckedBoxOrRadio = (type) => ['radio', 'checkbox'].includes(type);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const values = {};

    for (let field of form) {
        const {name} = field;

        if (name) {
            const {value, type, checked} = field;
            values[name] = isCheckedBoxOrRadio(type) ? checked : value;
        }
    }
        console.log(values)
})