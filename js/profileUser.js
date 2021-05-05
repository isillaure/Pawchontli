$(document).ready(async () => {
    console.log('user profile')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const adopter_id = urlParams.get('adopter_id')
    console.log(adopter_id);
    const authtoken = localStorage.getItem("authtoken");

    const data = await fetch(`http://localhost:8000/api/adopters/${adopter_id}/`, {
      headers: {
        Authorization: `Token ${authtoken}`,
      },
    });
    const arrayUser = await data.json();
    //const arrayShelter = await data.json();
    console.log(data, arrayUser);
    $('.user-image').attr('src',arrayUser.image)
    $('.user-name').text(`${arrayUser.user.first_name} ${arrayUser.user.last_name}`)
    $('.user-age').text(_calculateAge(new Date(arrayUser.birthdate)))
    $('.occupation-user').text(arrayUser.occupation)
    $('.location-user').text(arrayUser.state)
    $('.story-user').text(arrayUser.story)


function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
});
