function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value ;
    const inputFieldResult = parseFloat(inputFieldString);
    
    inputField.value = '';
    
    return inputFieldResult;
}

function getElementValueById(elementId){
    const elementField = document.getElementById(elementId).innerText;
    return parseFloat(elementField);
}

function setValueById(elementId, newValue) {
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue;
    return elementValue;
}

