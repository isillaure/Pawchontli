$(function () {
    console.log('is profile')

    $("#signup-form").on("submit", async (event) => {
        event.preventDefault();
        const username = $("#username").val();
        if (!username) {
            $("#username").addClass("is-invalid");
            return;
        } else {
            $("#username").removeClass("is-invalid");
        }
        const first_name = $("#first_name").val();
        if (!first_name) {
            $("#first_name").addClass("is-invalid");
            return;
        } else {
            $("#first_name").removeClass("is-invalid");
        }
        const last_name = $("#last_name").val();
        if (!last_name) {
            $("#last_name").addClass("is-invalid");
            return;
        } else {
            $("#last_name").removeClass("is-invalid");
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
        if (passwordConfirmation === '' || passwordConfirmation !== password) {
            $("#password-confirmation").addClass("is-invalid");
            $('#message-form').text("Las contraseñas deben ser iguales.")
            return;
        } else {
            $("#password-confirmation").removeClass("is-invalid");
            $('#message-form').text("")
        }

        try {
            const data = await fetch("http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com:8000/api/register/adopter/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    first_name,
                    last_name,
                    email,
                    password
                }),
            });
            const json = await data.json();
            console.log(data, json);
            if (data.status === 200) {
                window.location.href = "/logInUser.html"
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