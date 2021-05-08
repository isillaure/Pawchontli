$(document).ready(async () => {
    console.log('user profile')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const adopter_id = urlParams.get('adopter_id')
    console.log(adopter_id);
    const authtoken = localStorage.getItem("authtoken");

    const data = await fetch(`http://ec2-18-219-223-87.us-east-2.compute.amazonaws.com:8000/api/adopters/${adopter_id}/`, {
      headers: {
        Authorization: `Token ${authtoken}`,
      },
    });
    const arrayUser = await data.json();
    console.log(data, arrayUser);
    $('.user-image').attr('src',arrayUser.image)
    $('.user-name').text(`${arrayUser.user.first_name} ${arrayUser.user.last_name}`)
    $('.user-age').text(_calculateAge(new Date(arrayUser.birthdate)))
    $('.occupation-user').text(arrayUser.occupation)
    $('.location-user').text(arrayUser.state)
    $('.story-user').text(arrayUser.story)

    let layoutUpdate = "";
    layoutUpdate = `
    <a href="formUser.html?adopter_id=${adopter_id}">                    
    <img src="assets/svg/edit.svg" alt="" class="edit pb-4"  style="width: 2em;">
    </a> 
        `
    $('.updateuser').html(layoutUpdate)

    let buttonForms = "";
    buttonForms = `
    <a href="adoptionRequestsListUser.html?adopter_id=${adopter_id}">
    <button class="button-main">Ver solicitudes</button>
    </a>
        `
    $('.formsuser').html(buttonForms)


function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
});
