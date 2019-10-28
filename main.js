let firstNameInput = document.getElementById('firstName')
let lastNameInput = document.getElementById('lastName')

function setLocalStorageOnBlur(){
    localStorage.setItem('FirstNameInput',firstNameInput.value)
    localStorage.setItem('LastNameInput',lastNameInput.value)
}

function showLocalStorage(){
    console.log(localStorage.getItem('FirstNameInput'))
    console.log(localStorage.getItem('LastNameInput'))
}

function addLocalStoreItemsToInput(){
    let first = localStorage.getItem('FirstNameInput')
    let last = localStorage.getItem('LastNameInput')
 
    firstNameInput.innerText = first;
    lastNameInput.innerText = last;
}