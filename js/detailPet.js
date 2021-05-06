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
    


    // const arrayPet = {
    //     id: '1',
    //     name: 'Gnocchi',
    //     age: '8 months',
    //     species: 'dog',
    //     size: 'medium',
    //     character: 'shy',
    //     gender: 'male',
    //     story: 'Fue rescatado de la calle.',
    //     special_needs: 'Espacios amplios.',
    //     created_at: '2021-05-10T01:57:53:511840Z',
    //     image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    // } 
    //

    // replacing info
    $('.pet-image').attr('src',arrayPet.image)
    $('.pet-name').text(arrayPet.name)
    $('.pet-age').text(arrayPet.age)
    $('.pet-size').text(arrayPet.size)
    $('.pet-gender').text(arrayPet.gender)
    $('.story-pet').text(arrayPet.story)
    $('.character-pet').text(arrayPet.character)
    $('.special-needs').text(arrayPet.special_needs)
    $('.shelter-name').text(arrayPet.association.user.username)



    const association_id= arrayPet.association.id
    console.log(association_id)
    const data1 = await fetch(`http://localhost:8000/api/associations/${association_id}/`, {
      headers: {
        //Authorization: `Token ${authtokenshelter}`,
      },
    });
    const arrayShelter = await data1.json();
    let layoutshelter = "";
    layoutshelter=`
    <form action="https://www.paypal.com/donate" method="post" target="_top"
                                class="button-donation">
                                <input type="hidden" name="business" value="paw.chontli@gmail.com" />
                                <input type="hidden" name="item_name" value="Pawchontli" />
                                <input type="hidden" name="currency_code" value="MXN" />
                                <input type="image" src="assets/svg/button-sponsor.svg" border="0" name="submit style"
                                    title="PayPal - The safer, easier way to pay online!"
                                    alt="Donate with PayPal button" style="width: 10em;" />
                                <img alt="" border="0" src="https://www.paypal.com/en_MX/i/scr/pixel.gif" width="1"
                                    height="1" />
                            </form>
                            <a  href="adoptionForm.html?id_pet=${id_pet}">
                                <button class="button-main">Adoptar</button>
                            </a>
                        </div>
    <div class="info-shelter py-5 d-flex flex-column ">
    <p class="px-4 josefinsans-chetwode-blue-18px">
                                REFUGIO
                            </p>
                            <a href="profileShelter.html?association_id=${association_id}" class="d-inline-flex container flex-row shelter-button">
                                <img src="${arrayShelter.image}" alt=""
                                    style="width: 6em; height: 6em;">
                                <div class="col-12 text-shelter">
                                    <p class= "shelter-name">${arrayShelter.user.username}</p>
                                    <p class="d-flex flex-wrap">${arrayShelter.street_and_number} <br> ${arrayShelter.city}, ${arrayShelter.state}.</p>
                                </div>
                            </a>
                            </div>

    
        `
    $('.shelter-button').html(layoutshelter)
    


})