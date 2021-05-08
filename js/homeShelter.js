$(document).ready(async () => {
    console.log('shelter profile')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const association_id = urlParams.get('association_id')
    const authtokenshelter = localStorage.getItem("authtokenshelter");
    const is_shelter = localStorage.getItem("is_adopter")
    
    if(is_shelter == 'false'){

        const data = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com/:8000/api/associations/${association_id}/`, {
      headers: {
        Authorization: `Token ${authtokenshelter}`,
      },
    });
    const arrayShelter = await data.json();
    //const arrayShelter = await data.json();
    console.log(data, arrayShelter);
    $('.name-shelter').text(arrayShelter.user.username)






        const pets = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com/:8000/api/associations/${association_id}/pets/`, {
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

        let adoptionforms= "";
            adoptionforms=` 
            <div class="card" style="width: 30rem;">
                <a href="adoptionRequestsListShelter.html?association_id=${arrayShelter.id}">
                    <h1 class="requests-number josefinsans-semi-white-30px"></h1>
                    <p class=" title-requests josefinsans-semi-white-20px">Solicitudes <br> de adopción</p>
                </a>
            </div>
        
        `
        $('.forms-button').html(adoptionforms)

        let createpet= "";
            createpet=` 
            <div class="card" style="width: 30rem;"">
                    <a href="createPet.html?association_id=${arrayShelter.id}">
                    <img src="assets/svg/add.svg" alt="" style="height: 8em; width: 8em;">
                    <h3 class="josefinsans-medium-chetwode-blue-20px">Añadir mascota</h3>
                    </a>
                </div>
        
        `
        $('.create-pet').html(createpet)





    
        // const forms = await fetch(`http://localhost:8000/api/adoption_forms/`, {
        //     headers: {
        //       Authorization: `Token ${authtokenshelter}`,
        //     },
        //   });
  
  
        //   const arrayForms = await forms.json();
        //   console.log(arrayForms);
        //     let layoutforms = "";
        //   arrayForms.forEach(form => {
        //       console.log(form.pet)
        //       if(form.pet == "12" ){
        //           console.log("ok")
        //       }

            //   layoutpets+=`
            //   <div class="card" style="width: 20rem;">
            //           <svg class="ico" viewBox="0 0 24 24" style="width: 3em; height: 3em">
            //               <path
            //                   d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
            //               </path>
            //           </svg>
            //           <a href="detailPet.html?id_pet=${pet.id}">
            //               <img class="card-img-top" src="${pet.image}" alt="Pet">
            //           </a>
            //           <div class="card-body">
            //               <a href="detailPet.html?id_pet=${pet.id}">
            //                   <p class="card-text josefinsans-semi-bold-chetwode-blue-16px">${pet.name}</p>
            //               </a>
            //           </div>
            //       </div>
            //   `
        //   });
          //$('.search-pet').html(layoutpets)




    }
    else{
        console.log('No es asociación');
        window.location.href = "/loginShelter.html"
    }
    

  });
