import Inputmask from 'inputmask';
document.addEventListener('DOMContentLoaded', function() {
    Inputmask({
        mask: '+7(999) 999-99-99',
        placeholder: '_'
    }).mask(document.getElementById('telephone'));
});