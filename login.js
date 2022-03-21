const pseudo = document.getElementById("pseudo")
const eMail = document.getElementById("eMail")
const mdp = document.getElementById("mdp")
const confirmMdp = document.getElementById("confirmMdp")
const btn = document.getElementById("formBtn")
const error = document.getElementById("error")

const passwordCheck =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function setError(value) {
    error.innerText = value
}

function confirmForm() {
    if (pseudo.value.trim().length === 0 || eMail.value.trim().length === 0 || mdp.value.trim().length === 0 || confirmMdp.value.trim().length === 0){
        setError("Vous devez remplir tous les champs du formulaire pour pouvoir vous inscrire")
    } else if (pseudo.value.length < 5 || pseudo.value.length > 40){
        setError("Votre pseudo doit contenir entre 5 et 40 caractères")
    } else if (eMail.value.length < 10 || eMail.value.length > 150) {
        setError("Votre e-mail doit contenir entre 10 et 150 caractères")
    } else if (!eMail.value.match(emailCheck)) { 
        setError("Votre format d'e-mail n'est pas valide")
    } else if (!mdp.value.match(passwordCheck)) {
        setError("Votre mot doit comporter entre 8 et 30 caractères, au moins une lettre majuscule et minuscule, un chiffre ainsi qu'un caractère spécial")
    } else if (mdp.value !== confirmMdp.value) {
        setError("Les mots de passe que vous avez entrés ne sont pas identiques")
    } else {
        setError("")
        alert("Merci de votre inscription ! Votre compte client à bien été crée.")
    }
}


btn.addEventListener("click", confirmForm)


