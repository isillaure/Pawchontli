$(function () {
    console.log('is profile')
    const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const association_id = urlParams.get('association_id')
            console.log(association_id);
   


    $("#pet-form").on("submit", async (event) => {
        event.preventDefault();
        const name = $("#name").val();
        if (name === '') {
            $("#name").addClass("is-invalid");
            return;
        } else {
            $("#name").removeClass("is-invalid");
        }
        const species = $("#species").val();
        if (species === '') {
            $("#species").addClass("is-invalid");
            return;
        } else {
            $("#specices").removeClass("is-invalid");
        }
        const age = $("#age").val();
        if (age === '') {
            $("#age").addClass("is-invalid");
            return;
        } else {
            $("#age").removeClass("is-invalid");
        }
        const sex = $("#sex").val();
        if (sex === '') {
            $("#sex").addClass("is-invalid");
            return;
        } else {
            $("#sex").removeClass("is-invalid");
        }
        const size = $("#size").val();
        if (size === '') {
            $("#size").addClass("is-invalid");
            return;
        } else {
            $("#size").removeClass("is-invalid");
        }
        const character = $("#character").val();
        if (character === '') {
            $("#character").addClass("is-invalid");
            return;
        } else {
            $("#character").removeClass("is-invalid");
        }
        const story = $("#story").val();
        if (story === '') {
            $("#story").addClass("is-invalid");
            return;
        } else {
            $("#story").removeClass("is-invalid");
        }
        const specialNeeds = $("#special-needs").val();
        if (specialNeeds === '') {
            $("#special-Needs").addClass("is-invalid");
            return;
        } else {
            $("#special-Needs").removeClass("is-invalid");
        }
        const association = association_id;

        try {
            const fileInput = $('#image')[0].files[0]
            const formData = new FormData()
            formData.append('image', fileInput)
            formData.append('name', name)
            formData.append('species', species)
            formData.append('age', age)
            formData.append('gender', sex)
            formData.append('size', size)
            formData.append('character', character)
            formData.append('story', story)
            formData.append('special_needs', specialNeeds)
            formData.append('association', association)

            

            const authtokenshelter = localStorage.getItem("authtokenshelter");



            const data = await fetch(`http://localhost:8000/api/pets/create/`, {
                method: "POST",
                headers: {
                     Authorization: `Token ${authtokenshelter}`
                    //"Content-Type": "application/json",
                },
                body: formData
            });
            const json = await data.json();
            console.log(data, json);
            if (data.status === 201) {
                localStorage.setItem("authtoken", json.token);
                window.location.href = "/homeShelter.html?association_id="+association_id;
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