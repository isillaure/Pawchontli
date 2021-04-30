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



    
    // const data1 = await fetch(`http://localhost:8000/api/associations/${association_id}/`, {
    //   headers: {
    //     //Authorization: `Token ${authtokenshelter}`,
    //   },
    // });
    // const arrayShelter = await data1.json();
   
    // let layoutshelter = "";
    // layoutshelter=`
    // <p class="px-4 josefinsans-chetwode-blue-18px">
    //                             REFUGIO
    //                         </p>
    //                         <a href="profileShelter.html?${association_id}" class="d-inline-flex container flex-row shelter-button">
    //                             <img src="assets/img/shelterImage.jpg" alt=""
    //                                 style="width: 6em; height: 6em;">
    //                             <div class="col-12 text-shelter">
    //                                 <p class= "shelter-name">${arrayPet.association.user.username}</p>
    //                                 <p class="d-flex flex-wrap">Felipe Carrillo puerto #400, Alberto Zamora, <br> Coyoacán, 04000, CDMX.</p>
    //                             </div>
    //                         </a>

    
    //     `
    // $('.shelter-button').html(layoutshelter)
    


})