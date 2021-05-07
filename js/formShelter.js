$(function () {
    console.log('is profile')
    

    $("#form-shelter").on("submit", async (event) => {
        event.preventDefault();
        const organizationName = $("#organization-name").val();
        if (organizationName === '') {
            $("#organization-name").addClass("is-invalid");
            return;
        } else {
            $("#organization-name").removeClass("is-invalid");
        }
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
        const phone = $("#phone").val();
        if (phone === '') {
            $("#phone").addClass("is-invalid");
            return;
        } else {
            $("#phone").removeClass("is-invalid");
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
        const webAddress = $("#web-address").val();
        if (webAddress === '') {
            $("#web-address").addClass("is-invalid");
            return;
        } else {
            $("#web-address").removeClass("is-invalid");
        }
        const donationLink = $("#donation-link").val();
        if (donationLink === '') {
            $("#donation-link").addClass("is-invalid");
            return;
        } else {
            $("#donation-link").removeClass("is-invalid");
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
            
            const fileInput = $('#image')[0].files[0]
            const formData = new FormData()
            formData.append('image', fileInput)
            formData.append('first_name_contact', firstName)
            formData.append('last_name_contact', lastName)
            formData.append('phone', phone)
            formData.append('donation_link', donationLink)
            formData.append('web_address', webAddress)
            formData.append('state', state)
            formData.append('city', city)
            formData.append('zip_code', zipCode)
            formData.append('neighbourhood', neighbourhood)
            formData.append('street_and_number', street)
            formData.append('story', story)
            

            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const association_id = urlParams.get('association_id')
            console.log(association_id);

            const authtokenshelter = localStorage.getItem("authtokenshelter");

            const data = await fetch(`http://localhost:8000/api/associations/${association_id}/update/`, {
                method: "PATCH",
                headers: {
                    Authorization: `Token ${authtokenshelter}`
                    
                },
                body: formData
                
            });
            const json = await data.json();
            console.log(data, json);
            
            if (data.status === 200) {
                var associationid = json.id
                window.location.href = "/homeShelter.html?association_id="+associationid;
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