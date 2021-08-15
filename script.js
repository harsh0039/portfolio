
$(document).ready(function(){
$("#two").hide();


$("#profile-button").click(()=>{
 
  $("#one").fadeOut();
  $("#resume").css("margin-top","418px");
  $("#two").fadeIn();


});

$("#profile-button-second").click(()=>{

  $("#two").fadeOut();
   $("#resume").css("margin-top","0px");
  $("#one").fadeIn();
});

});




$(document).ready(function(){
  $("#resume-button,#resume-nav-link").click(function(){
    $("#collapseOne").collapse('show');
    
      $("#collapseOne").collapse('hide');
  });

});

$(document).ready(function(){
  $("#portfolio-button,#portfolio-nav-link").click(function(){
    $("#collapseTwo").collapse('show');
      $("#collapseTwo").collapse('hide');
  });

});



$(document).ready(function(){
  $("#testimonial-button").click(function(){
    $("#collapseTestimonial").collapse('show');
      $("#collapseTestimonial").collapse('hide');
  });

});

$(document).ready(function(){
  $("#contact-button,#contact-nav-link").click(function(){
    $("#collapseContact").collapse('show');
      $("#collapseContact").collapse('hide');
  });

});

$(document).ready(function(){
  $("#change").click(function(){
    if($("#body-background").hasClass("bg-light"))
    {
      $("#change").removeClass("bg-dark");
      $("#change").addClass("bg-white");
      $("#fa-dark").removeClass("text-white");
      $("#fa-dark").addClass("text-dark");
      $("#body-background").removeClass("bg-light");
      $("#body-background").css("background-color", "black");
      $(".card-header,.card-body").css("background-color", "black");
       $("#resume-dark").removeClass("bg-white");
      $("#resume-dark").css("background-color", "black");
      $("#resume-download-dark").removeClass("bg-white");
      $("#resume-download-dark").css("background-color", "black");
      $("#card-body-responsive").css("background-color", "black");
      $("#contact-dark").removeClass("bg-white");
      $("#contact-dark").css("background-color", "black");
      $("#contact-dark-right").css("background-color", "black");
       $("#body-background").css("color","#9F9692");
       $("#resume-heading").css("background-color","black");
       $("#resume-heading1").css("background-color","black");
        $("#resume-heading2").css("background-color","black");
        $("table").css("color","#9F9692");
        $("#resume-card").css("background-color", "black");
        
        
        
    }
    else{
     $("#change").removeClass("bg-white");
      $("#change").addClass("bg-dark");
      $("#fa-dark").removeClass("text-dark");
      $("#fa-dark").addClass("text-white");
       $("#body-background").removeClass("bg-dark");
      $("#body-background").addClass("bg-light");
      $(".card-header,.card-body").css("background-color", "white");
       $("#resume-dark").css("background-color", "white");
     
       $("#resume-download-dark").css("background-color", "white");
      $("#card-body-responsive").css("background-color", "white");
      $("#contact-dark").removeClass("bg-dark");
      $("#contact-dark").css("background-color", "white");
       $("#contact-dark-right").css("background-color", "#F3F3F5");
       $("#body-background").css("color","black");
       $("#resume-heading").css("background-color","#E7E8E9");
       $("#resume-heading1").css("background-color","#E7E8E9");
       $("#resume-heading2").css("background-color","#E7E8E9");
       $("table").css("color","black");
       $("#resume-card").css("background-color", "white");

        



    }
    
  });
});
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

// keyboard key restriction

// document.onkeydown = function(event){
//   if(event.ctrlKey && event.keyCode == 85 )
//   { 

//     return false;
//   }
//   if(event.ctrlKey && event.shiftKey && event.keyCode == 73)
//   {
//     return false;
//   }

//    if(event.ctrlKey && event.shiftKey && event.keyCode == 74)
//   {
//     return false;
//   }

//    if(event.ctrlKey && event.shiftKey && event.keyCode == 67)
//   {
//     return false;
//   }

//     if(event.keyCode == 123)
//   {

//     return false;
//   }

// }

//PHP mail Code

$(document).ready(function(){
  $("#submit-btn").click(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url : "mail.php",
      data: {
        name: $("#name-text").val(),
        email : $("#email-text").val(),
        message: $("#message-text").val()
      },
      beforeSend:function(){
          
      },
      success: function(response){
        if(response.trim() == "done")
        {
          $('.toast').toast('show');
          
          $(".toast-body").html("Thank you for contacting with me !");

          $("#contact-form").trigger("reset");
        }

      }
    });

  });
});