var Buy = document.querySelectorAll(".buy");  
for (var i=0; i<Buy.length; i++) {
  Buy[i].addEventListener("click", function(event) {
  event.preventDefault ();
  Card.classList.add ("card-show");
  Basket.classList.add ("active");
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
var Basket = document.querySelector(".basket");
var Bookmark = document.querySelector(".bookmark");
var BookmarkBtn = document.querySelectorAll(".action-btn.bookmark");
for (var i=0; i<BookmarkBtn.length; i++) {
    BookmarkBtn[i].addEventListener("click", function(event) {
        event.preventDefault ();
        Bookmark.classList.add("active");
    });
};

          