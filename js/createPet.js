$(function () {
    console.log('is profile')

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

        try {
            const data = await fetch(`http://localhost:8000/api/associations/${association_id}/create/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    species,
                    age,
                    sex,
                    size,
                    character,
                    story,
                    specialNeeds
                }),
            });
            const json = await data.json();
            console.log(data, json);
            if (data.status === 200) {
                localStorage.setItem("authtoken", json.token);
                window.location.href = "/petsListPerShelter.html";
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