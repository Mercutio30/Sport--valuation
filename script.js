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
      