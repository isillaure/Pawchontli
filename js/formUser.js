$(function () {
    console.log('is profile')

    $("#form-user").on("submit", async (event) => {
        event.preventDefault();
        // const firstName = $("#first-name").val();
        // if (firstName === '') {
        //     $("#first-name").addClass("is-invalid");
        //     return;
        // } else {
        //     $("#first-name").removeClass("is-invalid");
        // }
        // const lastName = $("#last-name").val();
        // if (lastName === '') {
        //     $("#last-name").addClass("is-invalid");
        //     return;
        // } else {
        //     $("#last-name").removeClass("is-invalid");
        // }
        // const birthdate = $("#birthdate").val();
        // if (birthdate === '') {
        //     $("#birthdate").addClass("is-invalid");
        //     return;
        // } else {
        //     $("#birthdate").removeClass("is-invalid");
        // }
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
        if (!checkbox.is(":checked")) {
            $("#checkbox-form").addClass("is-invalid");
            return;
        } else {
            $("#checkbox-form").removeClass("is-invalid");
        }

        try {
            const fileInput = $('#image')[0].files[0]
            const formData = new FormData()
            formData.append('image', fileInput)
            formData.append('phone', phone)
            formData.append('state', state)
            formData.append('zip_code', zipCode)
            formData.append('neighbourhood', neighbourhood)
            formData.append('street_and_number', street)
            formData.append('story', story)
            formData.append('occupation', occupation)
            // formData.append('birthdate', birthdate)

            


            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const adopter_id = urlParams.get('adopter_id')
            console.log(adopterid);

            const authtoken = localStorage.getItem("authtoken");

            const data = await fetch(`http://localhost:8000/api/adopters/${adopter_id}/update/`, {
                method: "PATCH",
                headers: {
                    Authorization: `Token ${authtoken}`
                },
                body: formData
            });
            const json = await data.json();
            console.log(data, json);
            if (data.status === 200) {
                var adopterid = json.id
                window.location.href = "/searchPet.html?adopterid="+adopterid;
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