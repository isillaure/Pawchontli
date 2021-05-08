$(function () {
    console.log('is profile')
    const previous_page = localStorage.getItem("previous_page")
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
            const data = await fetch("http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com/:8000/api/login/adopter/", {
                method: "POST",
                headers: {
                    /*Authorization: `Token ${authtoken}`,*/
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
                const authtoken=localStorage.setItem("authtoken", json.token);
                const is_adopter=localStorage.setItem("is_adopter", json.is_adopter)
                localStorage.setItem("user_id", json.adopter_id)
                var adopter_id = json.adopter_id
                const adopterinfo = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com/:8000/api/adopters/${adopter_id}/`, {
                headers: {
                        //Authorization: `Token ${authtoken}`,
                },
                });
                const arrayAdopter = await adopterinfo.json();
                console.log(arrayAdopter)
                if(arrayAdopter.phone == null){
                    window.location.href = "/formUser.html?adopter_id="+adopter_id;
                    console.log(adopter_id)
                }
                else{
                    if (previous_page == null){
                        window.location.href = "/searchPet.html?adopter_id="+adopter_id;
                    }
                    else {
                        window.location.href = previous_page
                    }
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