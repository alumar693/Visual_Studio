const hobbiesNumberInput = document.querySelector('#hobbies-number');
hobbiesNumberInput.addEventListener("input", (event) =>{
    if(event.target.validity.rangeOverflow || event.target.validity.rangeUnderflow){
        event.target.setCustomValidity("Debes elegir un número entre 2 y 4")
    }else{
        event.target.setCustomValidity('');
    }
})
document.addEventListener('DOMContentLoaded', () => {
    const hobbiesForm = document.querySelector('form');
    const hobbiesNumberInput = document.querySelector('#hobbies-number');
    const checkboxes = document.querySelectorAll('input.hobbies');
    const fieldset = document.querySelector('#fieldset');

    function updateCheckboxState() {
        const maxHobbies = parseInt(hobbiesNumberInput.value, 10);
        const selectedCheckboxes = document.querySelectorAll('input.hobbies:checked').length;

        checkboxes.forEach(checkbox => {
            if (selectedCheckboxes >= maxHobbies && !checkbox.checked) {
                checkbox.disabled = true;
            } else {
                checkbox.disabled = false;
            }
        });
    }

    function validateForm(event) {
        const maxHobbies = parseInt(hobbiesNumberInput.value);
        const selectedCheckboxes = document.querySelectorAll('input.hobbies:checked').length;
        let invalidLengthMessage = document.createElement("p")
        invalidLengthMessage.setAttribute('id', 'lengthMessage')
        let invalidLengthMessageText = document.createTextNode("Debes seleccionar " + maxHobbies + " aficiones")
        invalidLengthMessage.appendChild(invalidLengthMessageText);

        if (selectedCheckboxes !== maxHobbies) {
            event.preventDefault();
            if(!fieldset.classList.contains('error-fieldset')){
                fieldset.classList.add('error-fieldset');
                fieldset.insertAdjacentElement("afterend", invalidLengthMessage);
            }
        }else{
            if(fieldset.classList.contains('error-fieldset')){
                fieldset.classList.remove('error-fieldset');
                document.querySelector('#lengthMessage').remove();
            }
        }
    }

    hobbiesNumberInput.addEventListener('input', updateCheckboxState);

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCheckboxState);
    });

    hobbiesForm.addEventListener('submit', validateForm);
});

