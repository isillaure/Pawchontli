$(document).ready(async () => {
    console.log('shelter forms')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const adopter_id = urlParams.get('adopter_id')
    const authtokenshelter = localStorage.getItem("authtoken");
    const is_shelter = localStorage.getItem("is_adopter")



    const forms = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com:8000/api/adopters/${adopter_id}/adoption_forms/`, {
        headers: {
            Authorization: `Token ${authtoken}`,
        },
    });
    const arrayForms = await forms.json();
    console.log(arrayForms);
    let layoutforms = "";
    arrayForms.forEach(form => {
        layoutforms += `
        <div class="  d-flex justify-content-center flex-column">
            <button type="button" class="collapsible container-fluid d-flex align-items-center justify-content-between">
                <img src="assets/img/perro_2.jpg" alt="" class="image-pet" style="width:90px;">
                Gnocchi
                <img src="assets/svg/arrowdownwhite.svg" alt="" class="arrow-white" style="width: 1.5em;">
            </button>
            <div class="form-pet content container-fluid">
                <div class="d-flex flex-column pt-3">
                    <p class="josefinsans-chetwode-blue-18px">FECHA DE SOLICITUD</p>
                    <p>${form.created_at}</p>
                </div>
                <div class="d-flex flex-column">
                    <p class="josefinsans-chetwode-blue-18px">NOMBRE DEL ADOPTANTE</p>
                    <a href="profileUser.html">${form.adopter}</a>
                </div>
                <br>
               
                <div class="d-flex flex-column">
                    <p class="josefinsans-chetwode-blue-18px">FORMULARIO DE ADOPCIÓN</p>
                    <p class="question">¿Actualmente tienes
                        animales?</p>
                    <p>${form.amount_pets_today}</p>
                    <p class="question">¿Cuáles?</p>
                    <p>${form.which_pets_today}</p>
                    <p class="question">¿Anteriormente has
                        tenido otros animales?</p>
                    <p>${form.amount_pets_past}</p>
                    <p class="question">¿Qué fue lo que
                        pasó con ellos?</p>
                    <p>${form.story_pets_past}</p>
                    <p class="question">¿Todas las personas
                        en
                        casa están de acuerdo en adoptar?</p>
                    <p>${form.everyone_agrees}</p>
                    <p class="question">
                        Si
                        por algún motivo
                        tuvieras que cambiar de domicilio, ¿qué pasaría con el adoptado?
                    </p>
                    <p>${form.if_change_address}</p>
                    <p class="question">
                        ¿Cuántos años crees
                        que
                        vive un perro o gato en promedio?
                    </p>
                    <p>${form.average_age}</p>
                    <p class="question">
                        ¿Dónde dormirá el
                        adoptado?
                    </p>
                    <p>${form.place_of_sleep}</p>
                    <p class="question">
                        ¿Cuánto tiempo
                        pasará
                        solo?
                    </p>
                    <p>${form.time_by_itself}</p>
                    <p class="question">
                        En caso de tener
                        empleados domésticos, ¿ellos están al tanto de los cuidados de un animal?
                    </p>
                    <p>${form.petcare_awareness}</p>
                    <p class="question">
                        ¿Quién será el
                        responsable y se hará cargo de cubrir los gastos del adoptado?
                    </p>
                    <p>${form.pet_responsable}</p>
                    <p class="question">
                        ¿Tienes un médico
                        veterinario de cabecera?
                    </p>
                    <p>${form.veterinarian}</p>
                    <div class="d-flex flex-wrap justify-content-evenly pb-4">
                        <form action="">
                            <input type="submit" value="Declinar"
                            class="button-secondary">
                            <input type="submit" value="Aceptar"
                            class="button-main">
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        `
    });
    $('.formuser').html(layoutforms)

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});