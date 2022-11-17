$(document).ready(function(){
    $("#bhs").click(function(){
    $("#Hs").slideToggle(500);
    });
    });


    function valider(){
        if(document.contactf.subject.value != "") {
   
          return true;
        }
        else {
          alert("Veuillez saisir un nom de sujet");
          return false;
        }
        
      }

      function valider(){
        if(document.contactf.mail.value != "") {
   
          return true;
        }
        else {
          alert("Veuilez saisir votre email");
          return false;
        }
        
      }

      function valider(){
        if(document.contactf.msg.value != "") {
   
          return true;
        }
        else {
          alert("Veuilez écrire un message avant de valider");
          return false;
        } 
      }

      $(window).scroll(function(){
        var scrolledFromTop = $(window).scrollTop() + $(window).height();
        $(".appear").each(function(){
          var distanceFromTop = $(this).offset().top;
          if(scrolledFromTop >= distanceFromTop+100){
            console.log("hello");
            var delaiAnim = $(this).data("delai");
            $(this).delay(delaiAnim).animate({
              opacity:1
            });
          }
        });
      });
      