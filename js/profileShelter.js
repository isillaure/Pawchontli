$(function (){
    console.log('is profile')


    const arrayShelter = {
        id: '1',
        email: 'test@gmail.com',
        name: 'test name shelter',
        first_name_contact: 'Carlos',
        last_name_contact: 'Aviles',
        email_name_contact: 'carlos@mail.com',
        phone: '23456789',
        donation_link: 'www.google.com',
        web_address: 'https://www.google.com',
        story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod pretium est volutpat ultricies. Quisque congue velit in risus pretium, at mollis orci venenatis. Donec gravida convallis auctor. Donec congue maximus turpis vitae dapibus. Sed iaculis commodo nunc, nec porta massa. Cras eget facilisis nisi.',
        created_at: '2021-05-10T01:57:53:511840Z',
        address: 'Calle conocida',
        image: 'https://images.unsplash.com/photo-1585309117033-0e9160820ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80'
    } 

    // replacing info
    $('.shelter-image').attr('src',arrayShelter.image)
    $('.shelter-name').text(arrayShelter.name)
    $('.location-shelter').text(arrayShelter.address)
    $('.phone-shelter').text(arrayShelter.phone)
    $('.webaddress-shelter').text(arrayShelter.web_address)
    $('.webaddress-shelter').attr('href',arrayShelter.web_address)
    $('.story_shelter').text(arrayShelter.story)

})