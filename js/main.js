//Menu

$(function () {
    $('#toggle-menu').click(function () {
        $('.container-menu').addClass('open').fadeIn()
    })
    $('#close-menu').click(function () {
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

// Datepicker

$(function () {
    if ($('.datepicker').length > 0) {
        $('.datepicker').datepicker({
            format: 'mm-dd-yyyy'
        });
    }
});

// Filter button

