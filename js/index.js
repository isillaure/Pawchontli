$(document).ready(async () => {
    const pets = await fetch(`http://localhost:8000/api/pets/`, {
        headers: {
            //Authorization: `Token ${authtoken}`,
        },
    });
    const arrayPets = await pets.json();
    console.log(arrayPets);
    let layoutpets = "";
    arrayPets.forEach(pet => {
        layoutpets += `
        <div class="card" style="width: 17rem;">
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
    $('.pet-carousel').html(layoutpets)
});