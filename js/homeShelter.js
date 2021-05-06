$(document).ready(async () => {
    console.log('shelter profile')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const association_id = urlParams.get('association_id')
    const authtokenshelter = localStorage.getItem("authtokenshelter");
    
    
    const pets = await fetch(`http://localhost:8000/api/associations/${association_id}/pets/`, {
      headers: {
        Authorization: `Token ${authtokenshelter}`,
      },
    });
    const arrayPets = await pets.json();
    console.log(arrayPets);
    let layoutpets = "";
    arrayPets.pets.forEach(pet => {
        layoutpets+=`
        <div class="card" style="width: 20rem;">
                <svg class="ico" viewBox="0 0 24 24" style="width: 3em; height: 3em">
                    <path
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                    </path>
                </svg>
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

  });
