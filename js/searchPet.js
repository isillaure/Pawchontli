$(function () {
    console.log('is profile')

    var pets = [{
            "id": 1,
            "name": "Capitán",
            "species": "dog"
        },
        {
            "id": 2,
            "name": "Unti",
            "species": "cat"
        }
    ]


})


$(function () {
    const paintPets = (response) => {
        // console.log(response)
        let postHtml = ''
        let counter = 1
        let len = Object.keys(response).length

        let imagePost = ''
        for (item in response) {
            if (counter === len) {
                imagePost = `<img src="${response[item].urlPhoto_post}" class="card-img-top" alt="...">`
            }
            postHtml = `<div class="card" style="width: 20rem;">
            <svg class="ico" viewBox="0 0 24 24" style="width: 3em; height: 3em">
                <path
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                </path>
            </svg>
            <a href="">
                <img class="card-img-top" src="${response[item].urlPhoto_post}" alt="Pet">
            </a>
            <div class="card-body">
                <a href="">
                    <p class="card-text josefinsans-semi-bold-chetwode-blue-16px">"${response[item].urlPhoto_post}"</p>
                </a>
            </div>
        </div>` + postHtml
            counter++
            imagePost = ''
        }

        $('.container-post').append(postHtml)
    }
    $.ajax({
        url: "",
        method: 'GET'
    }).done(function (response) {
        paintPets(response)
    }).fail(function (err) {
        console.log(err)
        console.log(err.status)
        console.log(err.statusText)
        console.log('Error')
    })
})
getTagsIndex();