//Menu

$(function (){
    $('#toggle-menu').click(function (){
        $('.container-menu').addClass('open').fadeIn()
    })
    $('#close-menu').click(function (){
        $('.container-menu').removeClass('open').fadeOut()
    })

    $("#log-out").on("click", (element) => {
        element.preventDefault()
        localStorage.removeItem("authtoken");
        localStorage.removeItem("authtokenshelter");
        localStorage.removeItem("is_adopter");
        window.location.href = "/index.html";
    });
})


// Go back 
function goBack() {
    window.history.back();
}

// Go to top

mybutton = document.getElementById("myBtn");

window.onscroll = function () {
   /* scrollFunction()*/
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Image upload

function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();
        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

// Datepicker

$(function () {
    if ($('.datepicker').length>0){
        $('.datepicker').datepicker({
            format: 'mm-dd-yyyy'
        });
    }
});

// Like button

// var likeBtn = document.querySelector('.ico');
// var i;

// for (i = 0; i < likeBtn.length; i++) {
//     likeBtn.addEventListener('click', function () {
//         likeBtn.classList.toggle('liked');
//     });

//     document.addEventListener('keydown', function (key) {
//         if (key.key === 'l' || key.key === 'L') {
//             likeBtn.classList.toggle('liked');
//         }
//     });
// }

// Filter button

// $(function (){
//     $('#toggle-filter').click(function (){
//         $('.container-filter').addClass('open').fadeIn()
//     })
//     $('#toggle-filter').click(function (){
//         $('.container-filter').removeClass('open').fadeOut()
//     })
// })

// Log out

