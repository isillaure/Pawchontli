$(document).ready(async () => {
    console.log('shelter profile')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const association_id = urlParams.get('association_id')
    const data = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com/:8000/api/associations/${association_id}/`, {
      headers: {
        //Authorization: `Token ${authtokenshelter}`,
      },
    });
    const arrayShelter = await data.json();
    //const arrayShelter = await data.json();
    console.log(data, arrayShelter);
    $('.shelter-image').attr('src',arrayShelter.image)
    $('.shelter-name').text(arrayShelter.user.username)
    $('.state-shelter').text(arrayShelter.state)
    $('.location-shelter').text(arrayShelter.street_and_number)
    $('.phone-shelter').text(arrayShelter.phone)
    $('.webaddress-shelter').text(arrayShelter.web_address)
    $('#donation-link').attr('href',arrayShelter.donation_link)
    $('.story_shelter').text(arrayShelter.story)
    
   


    let layoutUpdate = "";
    layoutUpdate = `
    <a href="updateShelter.html">                    
    <img src="assets/svg/edit.svg" alt="" class="edit pb-4"  style="width: 2em;">
    </a>
        `
    $('.updateassociation').html(layoutUpdate)

  });