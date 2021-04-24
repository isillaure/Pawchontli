$(function (){
    console.log('is profile')


    const arrayPet = {
        id: '1',
        name: 'Gnocchi',
        age: '8 months',
        species: 'dog',
        size: 'medium',
        character: 'shy',
        gender: 'male',
        story: 'Fue rescatado de la calle.',
        special_needs: 'Espacios amplios.',
        created_at: '2021-05-10T01:57:53:511840Z',
        image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    } 

    // replacing info
    $('.pet-image').attr('src',arrayPet.image)
    $('.pet-name').text(arrayPet.first_name)
    $('.pet-age').text(arrayPet.birthdate)
    $('.pet-size').text(arrayPet.size)
    $('.pet-gender').text(arrayPet.gender)
    $('.story-pet').text(arrayPet.story)
    $('.character-pet').text(arrayPet.character)
    $('.special-needs').text(arrayPet.special_needs)
})