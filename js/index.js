$(document).ready(async () => {
    const pets = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com:8000/api/pets/`, {
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

    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        autoWidth: true,
        stagePadding: 100,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })
});