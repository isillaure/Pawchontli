$(function (){
    console.log('is profile')


    const arrayUser = {
        id: '1',
        email: 'test@gmail.com',
        first_name: 'Victoria',
        last_name: 'Robertson',
        birthdate: '1993-10-10',
        phone: '5553034233',
        occupation: 'Estudiante',
        address: 'Calle conocida',
        story: 'Soy amante de los animales, busco un gato con quien compartir mi vida.',
        created_at: '2021-05-10T01:57:53:511840Z',
        image: 'https://images.unsplash.com/photo-1603216427253-c3dd001c80ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    } 

    // replacing info
    $('.user-image').attr('src',arrayUser.image)
    $('.user-name').text(`${arrayUser.first_name} ${arrayUser.last_name}`)
    $('.user-age').text(_calculateAge(new Date(arrayUser.birthdate)))
    $('.occupation-user').text(arrayUser.occupation)
    $('.location-user').text(arrayUser.address)
    $('.story-user').text(arrayUser.story)
})

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

