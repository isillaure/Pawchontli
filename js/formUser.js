$(function () {
    console.log('is profile')

    $("#form-user").on("submit", async (event) => {
        event.preventDefault();
        const firstName = $("#first-name").val();
        if (firstName === '') {
            $("#first-name").addClass("is-invalid");
            return;
        } else {
            $("#first-name").removeClass("is-invalid");
        }
        const lastName = $("#last-name").val();
        if (lastName === '') {
            $("#last-name").addClass("is-invalid");
            return;
        } else {
            $("#last-name").removeClass("is-invalid");
        }
        const birthdate = $("#birthdate").val();
        if (birthdate === '') {
            $("#birthdate").addClass("is-invalid");
            return;
        } else {
            $("#birthdate").removeClass("is-invalid");
        }
        const phone = $("#phone").val();
        if (phone === '') {
            $("#phone").addClass("is-invalid");
            return;
        } else {
            $("#phone").removeClass("is-invalid");
        }
        const occupation = $("#occupation").val();
        if (occupation === '') {
            $("#occupation").addClass("is-invalid");
            return;
        } else {
            $("#occupation").removeClass("is-invalid");
        }
        const street = $("#street").val();
        if (street === '') {
            $("#street").addClass("is-invalid");
            return;
        } else {
            $("#street").removeClass("is-invalid");
        }
        const neighbourhood = $("#neighbourhood").val();
        if (neighbourhood === '') {
            $("#neighbourhood").addClass("is-invalid");
            return;
        } else {
            $("#neighbourhood").removeClass("is-invalid");
        }
        const city = $("#city").val();
        if (city === '') {
            $("#city").addClass("is-invalid");
            return;
        } else {
            $("#city").removeClass("is-invalid");
        }
        const state = $("#state").val();
        if (state === '') {
            $("#state").addClass("is-invalid");
            return;
        } else {
            $("#state").removeClass("is-invalid");
        }
        const zipCode = $("#zip-code").val();
        if (zipCode === '') {
            $("#zip-code").addClass("is-invalid");
            return;
        } else {
            $("#zip-code").removeClass("is-invalid");
        }
        const story = $("#story").val();
        if (story === '') {
            $("#story").addClass("is-invalid");
            return;
        } else {
            $("#story").removeClass("is-invalid");
        }
        const checkbox = $("#checkbox-form");
        if (!checkbox.is(":checked")){
            $("#checkbox-form").addClass("is-invalid");
            return;
        } else {
            $("#checkbox-form").removeClass("is-invalid");
        }

        try {
            const data = await fetch("http://localhost:8000/api/adopters/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    birthdate,
                    phone,
                    occupation,
                    street,
                    neighbourhood,
                    city,
                    state,
                    zipCode,
                    story
                }),
            });
            const json = await data.json();
            console.log(data, json);
            if (data.status === 200) {
                localStorage.setItem("authtoken", json.token);
                window.location.href = "/searchPet.html";
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