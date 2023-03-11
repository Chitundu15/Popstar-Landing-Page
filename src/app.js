function handleSubmit(event){
    event.preventDefault();
    let name = document.querySelector("#nameInput");
    let email = document.querySelector("#emailInput");
    let nameInput = alert(`Hello ${name.value}, an email will be sent to you soon, in the meantime you can stream our albums using the links about if you haven't already!`)
    let submitted = document.querySelector(".thankyou");
    if(
        name.value &&
        email.value.length > 0
    ){
        submitted.classList.remove("hidden");
        mailingListInput.classList.add("hidden")
    }
}


let mailingListInput = document.querySelector("#personal-details");
mailingListInput.addEventListener("submit",handleSubmit);