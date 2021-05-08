$(function () {
    console.log('is profile')

    $("#login-shelter-form").on("submit", async (event) => {
        event.preventDefault();
        const username = $("#username").val();
        if (username =='') {
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
            const data = await fetch("http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com:8000/api/login/association/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            const json = await data.json();
            console.log(data, json);
            if (data.status === 200) {
                const authtokenshelter = localStorage.getItem("authtokenshelter");
                localStorage.setItem("authtokenshelter", json.token);
                localStorage.setItem("is_adopter", json.is_adopter);
                var association_id = json.association_id
                const shelterinfo = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com:8000/api/associations/${association_id}/`, {
                headers: {
                    Authorization: `Token ${authtokenshelter}`,
                },
                });
                const arrayShelter = await shelterinfo.json();
                if(arrayShelter.first_name_contact == ""){
                    window.location.href = "/formShelter.html?association_id="+association_id;
                }
                else{
                    window.location.href = "/homeShelter.html?association_id="+association_id;
                }
                
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