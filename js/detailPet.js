$(document).ready(async () => {
  console.log('profile pet')
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id_pet = urlParams.get('id_pet')

  const data = await fetch(`http://localhost:8000/api/pets/${id_pet}/`, {
    headers: {
      //Authorization: `Token ${authtokenshelter}`,
    },
  });
  const arrayPet = await data.json();
  console.log(data, arrayPet);

  // replacing info
  $('.pet-image').attr('src', arrayPet.image)
  $('.pet-name').text(arrayPet.name)
  $('.pet-age').text(arrayPet.age)
  $('.pet-size').text(arrayPet.size)
  $('.pet-gender').text(arrayPet.gender)
  $('.story-pet').text(arrayPet.story)
  $('.character-pet').text(arrayPet.character)
  $('.special-needs').text(arrayPet.special_needs)
  $('.shelter-name').text(arrayPet.association.user.username)


  const association_id = arrayPet.association.id
  console.log(association_id)
  const data1 = await fetch(`http://localhost:8000/api/associations/${association_id}/`, {
    headers: {
      //Authorization: `Token ${authtokenshelter}`,
    },
  });
  const arrayShelter = await data1.json();
  let layoutshelter = "";
  layoutshelter = `
                    <div class="info-shelter py-5 d-flex flex-column">
                        <p class="px-4 josefinsans-chetwode-blue-18px">
                            REFUGIO
                        </p>
                        <a href="profileShelter.html?association_id=${association_id}"
                            class="d-inline-flex container flex-row shelter-button">
                            <img src="${arrayShelter.image}" alt="" style="width: 6em; height: 6em;">
                            <div class="col-12 text-shelter">
                                <p class="shelter-name">${arrayShelter.user.username}</p>
                                <p class="shelter-address">${arrayShelter.street_and_number} <br> ${arrayShelter.city},
                                ${arrayShelter.state}.</p>
                            </div>
                        </a>
                    </div>
                </div>
      `
  $('.shelter-button').html(layoutshelter)

})