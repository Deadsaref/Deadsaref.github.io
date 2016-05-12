var Buy = document.querySelectorAll(".buy");  
          for (var i=0; i<Buy.length; i++) {
              Buy[i].addEventListener("click", function(event) {
              event.preventDefault ();
              Card.classList.add ("card-show");
          });
          };
          var Card = document.querySelector(".card-add");
          var CardClose = document.querySelector(".card-add .form-close");
          var BtnContinue = document.querySelector(".continue");
          
          CardClose.addEventListener("click", function(event) {
              event.preventDefault ();
              Card.classList.remove ("card-show");
          });
          BtnContinue.addEventListener("click", function(event) {
              event.preventDefault ();
              Card.classList.remove ("card-show");
          });
          