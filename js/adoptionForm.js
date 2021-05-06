$(function () {
    console.log('is profile')
<<<<<<< HEAD

    $("#adoption-form").on("submit", async (event) => {
        event.preventDefault();
        const amountPetsToday = $("#amount-pets-today").val();
        if (amountPetsToday === '') {
            $("#amount-pets-today").addClass("is-invalid");
            return;
        } else {
            $("#amount-pets-today").removeClass("is-invalid");
        }
        const whichPetsToday = $("#which-pets-today").val();
        if (whichPetsToday === '') {
            $("#which-pets-today").addClass("is-invalid");
            return;
        } else {
            $("#which-pets-today").removeClass("is-invalid");
        }
        const amountPetsPast = $("#amount-pets-past").val();
        if (amountPetsPast === '') {
            $("#amount-pets-past").addClass("is-invalid");
            return;
        } else {
            $("#amount-pets-past").removeClass("is-invalid");
        }
        const storyPetsPast = $("#story-pets-past").val();
        if (storyPetsPast === '') {
            $("#story-pets-past").addClass("is-invalid");
            return;
        } else {
            $("#story-pets-past").removeClass("is-invalid");
        }
        const everyoneAgrees = $("#everyone-agrees").val();
        if (everyoneAgrees === '') {
            $("#everyone-agrees").addClass("is-invalid");
            return;
        } else {
            $("#everyone-agrees").removeClass("is-invalid");
        }
        const allowedToOwn = $("allowed-to-own").val();
        if (allowedToOwn === '') {
            $("#allowed-to-own").addClass("is-invalid");
            return;
        } else {
            $("#allowed-to-own").removeClass("is-invalid");
        }
        const ifChangeAddress= $("#if-change-address").val();
        if (ifChangeAddress === '') {
            $("#if-change-address").addClass("is-invalid");
            return;
        } else {
            $("#if-change-address").removeClass("is-invalid");
        }
        const averageAge = $("#average-age").val();
        if (averageAge === '') {
            $("#average-age").addClass("is-invalid");
            return;
        } else {
            $("#average-age").removeClass("is-invalid");
        }
        const placeOfSleep = $("#place-of-sleep").val();
        if (placeOfSleep === '') {
            $("#place-of-sleep").addClass("is-invalid");
            return;
        } else {
            $("#place-of-sleep").removeClass("is-invalid");
        }
        const timeByItself = $("#time-by-itself").val();
        if (timeByItself === '') {
            $("#time-by-itself").addClass("is-invalid");
            return;
        } else {
            $("#time-by-itself").removeClass("is-invalid");
        }
        const petcareAwareness = $("#petcare-awareness").val();
        if (petcareAwareness === '') {
            $("#petcare-awareness").addClass("is-invalid");
            return;
        } else {
            $("#petcare-awareness").removeClass("is-invalid");
        }
        const petResponsible = $("#pet-responsible");
        if (petResponsible === '') {
            $("#pet-responsible").addClass("is-invalid");
            return;
        } else {
            $("#pet-responsible").removeClass("is-invalid");
        }
        const veterinarian= $("#veterinarian");
        if (veterinarian === '') {
            $("#veterinarian").addClass("is-invalid");
            return;
        } else {
            $("#veterinarian").removeClass("is-invalid");
        }
        const checkbox= $("#checkbox-form");
        if (!checkbox.is(":checked")){
            $("#checkbox-form").addClass("is-invalid");
            return;
        } else {
            $("#checkbox-form").removeClass("is-invalid");
        }

        try {
            const formData = new FormData()
            formData.append('amount_pets_today', amountPetsToday)
            formData.append('which_pets_today', whichPetsToday)
            formData.append('amount_pets_past', amountPetsPast)
            formData.append('story_pets_past', storyPetsPast)
            formData.append('everyone_agrees', everyoneAgrees)
            formData.append('allowed_to_own', allowedToOwn)
            formData.append('if_change_address', ifChangeAddress)
            formData.append('average_age', averageAge)
            formData.append('place_of_sleep', placeOfSleep)
            formData.append('time_by_itself', timeByItself)
            formData.append('petcare_awareness', petcareAwareness)
            formData.append('pet_responsable', petResponsible)
            formData.append('veterinarian', veterinarian)

            const data = await fetch("http://localhost:8000/api/adoption_forms/create/", {
                method: "POST",
                headers: {
                    //Authorization: `Token ${authtoken}`
                    
                },
                body: formData
                
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
=======
    const is_adopter = localStorage.getItem("is_adopter")
    
    if(is_adopter == 'true'){
        $("#adoption-form").on("submit", async (event) => {
            event.preventDefault();
            const amountPetsToday = $("#amount-pets-today").val();
            if (amountPetsToday === '') {
                $("#amount-pets-today").addClass("is-invalid");
                return;
            } else {
                $("#amount-pets-today").removeClass("is-invalid");
            }
            const whichPetsToday = $("#which-pets-today").val();
            if (whichPetsToday === '') {
                $("#which-pets-today").addClass("is-invalid");
                return;
            } else {
                $("#which-pets-today").removeClass("is-invalid");
            }
            const amountPetsPast = $("#amount-pets-past").val();
            if (amountPetsPast === '') {
                $("#amount-pets-past").addClass("is-invalid");
                return;
            } else {
                $("#amount-pets-past").removeClass("is-invalid");
            }
            const storyPetsPast = $("#story-pets-past").val();
            if (storyPetsPast === '') {
                $("#story-pets-past").addClass("is-invalid");
                return;
            } else {
                $("#story-pets-past").removeClass("is-invalid");
            }
            const everyoneAgrees = $("#everyone-agrees").val();
            if (everyoneAgrees === '') {
                $("#everyone-agrees").addClass("is-invalid");
                return;
            } else {
                $("#everyone-agrees").removeClass("is-invalid");
            }
            const allowedToOwn = $("allowed-to-own").val();
            if (allowedToOwn === '') {
                $("#allowed-to-own").addClass("is-invalid");
                return;
            } else {
                $("#allowed-to-own").removeClass("is-invalid");
            }
            const ifChangeAddress= $("#if-change-address").val();
            if (ifChangeAddress === '') {
                $("#if-change-address").addClass("is-invalid");
                return;
            } else {
                $("#if-change-address").removeClass("is-invalid");
            }
            const averageAge = $("#average-age").val();
            if (averageAge === '') {
                $("#average-age").addClass("is-invalid");
                return;
            } else {
                $("#average-age").removeClass("is-invalid");
            }
            const placeOfSleep = $("#place-of-sleep").val();
            if (placeOfSleep === '') {
                $("#place-of-sleep").addClass("is-invalid");
                return;
            } else {
                $("#place-of-sleep").removeClass("is-invalid");
            }
            const timeByItself = $("#time-by-itself").val();
            if (timeByItself === '') {
                $("#time-by-itself").addClass("is-invalid");
                return;
            } else {
                $("#time-by-itself").removeClass("is-invalid");
            }
            const petcareAwareness = $("#petcare-awareness").val();
            if (petcareAwareness === '') {
                $("#petcare-awareness").addClass("is-invalid");
                return;
            } else {
                $("#petcare-awareness").removeClass("is-invalid");
            }
            const petResponsible = $("#pet-responsible");
            if (petResponsible === '') {
                $("#pet-responsible").addClass("is-invalid");
                return;
            } else {
                $("#pet-responsible").removeClass("is-invalid");
            }
            const veterinarian= $("#veterinarian");
            if (veterinarian === '') {
                $("#veterinarian").addClass("is-invalid");
                return;
            } else {
                $("#veterinarian").removeClass("is-invalid");
            }
            const checkbox= $("#checkbox-form");
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
                        amountPetsToday,
                        whichPetsToday,
                        amountPetsPast,
                        storyPetsPast,
                        everyoneAgrees,
                        allowedToOwn,
                        ifChangeAddress,
                        averageAge,
                        placeOfSleep,
                        timeByItself,
                        petcareAwareness,
                        petResponsible,
                        veterinarian
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
    }
    else{
        console.log('No es adoptante');
        localStorage.setItem("previous_page", window.location.href)
        window.location.href = "/loginUser.html"
    }
>>>>>>> ef2084ff03a2099fb4019fa8ed299b2bed351d83
})