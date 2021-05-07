$(document).ready(async () => {
    console.log('shelter forms')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const association_id = urlParams.get('association_id')
    const authtokenshelter = localStorage.getItem("authtokenshelter");
    const is_shelter = localStorage.getItem("is_adopter")



    const forms = await fetch(`http://localhost:8000/api/adoption_forms/`, {
        headers: {
            Authorization: `Token ${authtokenshelter}`,
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
                    <a href="profileUser.html">Victoria Robertson</a>
                </div>
                <br>
                <div class="d-flex flex-column">
                    <p class="josefinsans-chetwode-blue-18px">ESTATUS</p>
                    <p>Activa.</p>
                </div>
                <div class="d-flex flex-column">
                    <p class="josefinsans-chetwode-blue-18px">FORMULARIO DE ADOPCIÓN</p>
                    <p class="question">¿Actualmente tienes
                        animales?</p>
                    <p>Sí.</p>
                    <p class="question">¿Cuáles?</p>
                    <p>Un perro.</p>
                    <p class="question">¿Anteriormente has
                        tenido otros animales?</p>
                    <p>Sí, un gato.</p>
                    <p class="question">¿Qué fue lo que
                        pasó con ellos?</p>
                    <p>Falleció por cáncer.</p>
                    <p class="question">¿Todas las personas
                        en
                        casa están de acuerdo en adoptar?</p>
                    <p>Sí.</p>
                    <p class="question">
                        Si
                        por algún motivo
                        tuvieras que cambiar de domicilio, ¿qué pasaría con el adoptado?
                    </p>
                    <p>Buscaría un departamento donde acepten mascotas para llevarlo conmigo.</p>
                    <p class="question">
                        ¿Cuántos años crees
                        que
                        vive un perro o gato en promedio?
                    </p>
                    <p>15 años.</p>
                    <p class="question">
                        ¿Dónde dormirá el
                        adoptado?
                    </p>
                    <p>Conmigo.</p>
                    <p class="question">
                        ¿Cuánto tiempo
                        pasará
                        solo?
                    </p>
                    <p>Tal vez una hora diaria.</p>
                    <p class="question">
                        En caso de tener
                        empleados domésticos, ¿ellos están al tanto de los cuidados de un animal?
                    </p>
                    <p>No tengo.</p>
                    <p class="question">
                        ¿Quién será el
                        responsable y se hará cargo de cubrir los gastos del adoptado?
                    </p>
                    <p>Yo.</p>
                    <p class="question">
                        ¿Tienes un médico
                        veterinario de cabecera?
                    </p>
                    <p>Sí.</p>
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
    $('.formpet').html(layoutforms)

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