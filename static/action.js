
$(document).ready(function() {


    let image = document.getElementById("logo")


    image.addEventListener("mouseleave", function() {

        image.src = "/static/images/logo2.png"

    }  )

    image.addEventListener("mouseenter", function() {

        image.src = "/static/images/logo.png"

    }  )

    
    document.getElementById("email").addEventListener("click", function(e) {
        let text = $(e.target).text();
        navigator.clipboard.writeText(text)
        $('#form_output').text("Email Copied").show();
        
        $('#form_output').delay(500).fadeOut(3000, function() {
            $(this).hide();
        })
    })
    
})


    
    