function setLocalStorageOnBlur(){
    let firstNameInput = document.getElementById('firstName')
    let lastNameInput = document.getElementById('lastName')

    console.log("Did somethig on blur")
    
    localStorage.setItem('FirstNameInput',firstNameInput.value)

    console.log(firstNameInput.value)

}

function showLocalStorage(){
    console.log(localStorage.getItem('FirstNameInput'))
}