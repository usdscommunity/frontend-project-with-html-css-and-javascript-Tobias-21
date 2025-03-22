document.addEventListener("DOMContentLoaded", function () {

    const image = document.getElementById("image")
    if (window.matchMedia("(max-width:700px)").matches) {
        image.src = "assets/images/illustration-sign-up-mobile.svg"

    }

    const button = document.querySelector(".button")
    const form = document.querySelector("form")
    form.addEventListener("submit", (Event) => {
        Event.preventDefault()

        try {
            let email = document.querySelector('input[type="email"]')
            verifierMail(email.value)
            email.style.borderColor = "hsl(234, 29%, 20%)"
            email.style.backgroundColor = "white"
            email.style.color = "hsl(234, 29%, 20%)"
            afficherMessage("")
            window.location.href = "succes.html"

        } catch (erreur) {
            email.style.borderColor = "red"
            email.style.color = "red"
            email.style.backgroundColor = "rgb(247, 201, 209)"
            afficherMessage(erreur.message)
        }


    })


    function verifierMail(mail) {

        let regex = new RegExp("^[a-z0-9]+@[a-z0-9]+\\.[a-z0-9]+$")

        if (regex.test(mail) === false) {
            throw new Error("Valid email requered")
        }
    }

    function afficherMessage(message) {
        let span = document.getElementById("span")

        if (!span) {
            const p = document.querySelector(".email")
            span = document.createElement("span")
            span.style.color = "red"
            span.style.paddingLeft = "4em"
            span.style.fontFamily = "Roboto-Regular"
            span.id = "span"
            p.appendChild(span)
        }

        span.innerText = message
    }

})

