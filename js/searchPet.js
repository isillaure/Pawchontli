$(document).ready(async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const adopter_id = urlParams.get('adopter_id');
    const is_adopter = localStorage.getItem("is_adopter")
    if (is_adopter == "true"){
        console.log('Es adoptante');
        const pets = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com:8000/api/pets/`, {
          headers: {
            //Authorization: `Token ${authtoken}`,
          },
        });
        const arrayPets = await pets.json();
        console.log(arrayPets);
        let layoutpets = "";
        arrayPets.forEach(pet => {
            layoutpets+=`
            <div class="card" style="width: 20rem;">
                    <a href="detailPet.html?id_pet=${pet.id}">
                        <img class="card-img-top" src="${pet.image}" alt="Pet">
                    </a>
                    <div class="card-body">
                        <a href="detailPet.html?id_pet=${pet.id}">
                            <p class="card-text josefinsans-semi-bold-chetwode-blue-16px">${pet.name}</p>
                        </a>
                    </div>
                </div>
            `
        });
        $('.search-pet').html(layoutpets)
    }
    else{
        console.log('No es adoptante');
        window.location.href = "/403.html"
    }

    $('.dropdown-toggle').dropdown()

  });
