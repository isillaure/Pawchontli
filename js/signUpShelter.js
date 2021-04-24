$(function () {
    console.log('is profile')

    $("#signup-form").on("submit", async (event) => {
        event.preventDefault();
        const name = $("#name").val();
        if (!name) {
            $("#name").addClass("is-invalid");
            return;
        } else {
            $("#name").removeClass("is-invalid");
        }
        const email = $("#email").val();
        if (!email || !validateEmail(email)) {
            $("#email").addClass("is-invalid");
            return;
        } else {
            $("#email").removeClass("is-invalid");
        }
        const password = $("#password").val();
        if (password === '') {
            $("#password").addClass("is-invalid");
            return;
        } else {
            $("#password").removeClass("is-invalid");
        }
        const passwordConfirmation = $("#password-confirmation").val();
        if (passwordConfirmation === '' || passwordconfirmation !== password) {
            $("#password-confirmation").addClass("is-invalid");
            $('#message-form').text("Las contraseñas deben ser iguales.")
            return;
        } else {
            $("#password-confirmation").removeClass("is-invalid");
            $('#message-form').text("")
        }

        try {
            const data = await fetch("http://localhost:8000/api/associations/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            });
            const json = await data.json();
            console.log(data, json);
            if (data.status === 200) {
                window.location.href = "/logInShelter.html";
            }
        } catch (error) {
            console.log(error);
        }
    });
    $('.input-base').keyup(function () {
        if ($(this).val() !== '') {
            $(this).removeClass("is-invalid")
        }
    })
})

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}