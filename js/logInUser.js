$(function () {
    console.log('is profile')

    $("#login-form").on("submit", async (event) => {
        event.preventDefault();
        const username = $("#username").val();
        if (!username || '') {
            $("#username").addClass("is-invalid");
            return;
        } else {
            $("#username").removeClass("is-invalid");
        }
        const password = $("#password").val();
        if (password === '') {
            $("#password").addClass("is-invalid");
            return;
        } else {
            $("#password").removeClass("is-invalid");
        }

        try {
            /*const authtoken = localStorage.getItem("authtoken");*/
            const data = await fetch("http://localhost:8000/api/login/adopter/", {
                method: "POST",
                headers: {
                    /*Authorization: `Token ${authtoken}`,*/
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            const json = await data.json();
            console.log(data, json);
            if (data.status === 200) {
                localStorage.setItem("authtoken", json.token);
                var adopter_id = json.adopter_id
                window.location.href = "/profileUser.html?adopter_id="+adopter_id;
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