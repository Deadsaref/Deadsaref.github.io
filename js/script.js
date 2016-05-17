
//Покупка и закладки

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

//Карта

var MapPopup = document.querySelector(".map");
var MapClose = document.querySelector(".map .form-close");
var MapShow = document.querySelector(".map-show");

if (MapShow) {
    MapShow.addEventListener("click", function (event) {
        event.preventDefault ();
        MapPopup.classList.add("map-popup-show");
    });
    MapClose.addEventListener("click", function (event) {
        event.preventDefault ();
        MapPopup.classList.remove("map-popup-show");
    });
}


//Обратная связь

var LinkWriteUs = document.querySelector(".btn-write");
var WriteWindow = document.querySelector(".write-us");
var WriteUSFormClose = document.querySelector(".write-us .form-close");
var Form = document.querySelector(".write-us form");
var Name = document.querySelector(".write-us [name=name]");
var Pass = document.querySelector(".write-us [name=e-mail]");
var Message = document.querySelector(".write-us [name=message]");


if (LinkWriteUs) {
    LinkWriteUs.addEventListener("click", function (event) {
        event.preventDefault();
        WriteWindow.classList.add("write-us-show");
    });
    WriteUSFormClose.addEventListener("click", function (event) {
        event.preventDefault();
        WriteWindow.classList.remove("write-us-show");
        WriteWindow.classList.remove("error");
    });
    Form.addEventListener("submit", function(event) {
        if (!Name.value || !Pass.value || !Message.value) {
            event.preventDefault ();   
            WriteWindow.classList.remove("error");
            WriteWindow.offsetWidth = WriteWindow.offsetWidth;
            WriteWindow.classList.add("error");        
        }
    });
}


//Сервис-слайдер

$(document).ready(function () {
  var menuElementPath = "#menu li";
  var slidePath = ".slide";
  $(menuElementPath).click(function () {
    $(menuElementPath).removeClass("active");
    $(this).addClass("active");
    $(slidePath).removeClass("active");   
    var c = $(this).attr("id").split("-");
    $(slidePath+"[class*="+c[1]+"]").addClass("active");
  });
});

//Слайдер на главной

$(document).ready(function() {
    $(".sliderBox > .controls > .point").bind("click", function() {
        if ($(this).attr("class") == "point active") {
            return false;
        }
        $(".sliderBox > .controls > .point").removeClass("active");
        $(this).addClass("active");
        $(".sliderBox > .images").css("left", "-" + $(".point").index(this) * 620 + "px");
    });

    $(".sliderBox > .controls > .slide").bind("click", function() {
        var imageID = $(".point.active").index(".point");
        var imagesCount = $(".sliderBox > .controls > .point").length - 1;
        if ($(this).attr("id") == "right") {
            if (imageID == imagesCount) {
                $($(".sliderBox > .controls > .point"))[0].click();
            } else {
                imageID++;
                $($(".sliderBox > .controls > .point"))[imageID].click();
            }
        } else if ($(this).attr("id") == "left") {
            if (imageID == 0) {
                $($(".sliderBox > .controls > .point"))[imagesCount].click();
            } else {
                imageID--;
                $($(".sliderBox > .controls > .point"))[imageID].click();
            }
        }
    });
});

//Сортировка

var Sort = document.querySelectorAll(".sorting-name");
    for (var i=0; i<Sort.length; i++) {
        Sort[i].addEventListener("click", function(event) {
            event.preventDefault ();
            var SortAct = document.querySelector(".sorting-name.active");
            SortAct.classList.remove("active");
            this.classList.add("active");            
    });
    };
var ArrowUP = document.querySelector(".arrow-up");
var ArrowDown = document.querySelector(".arrow-down");

if (ArrowUP) {
    ArrowUP.addEventListener("click", function(event) {
        event.preventDefault ();
        ArrowUP.classList.add("active");
        ArrowDown.classList.remove("active");
    });
    ArrowDown.addEventListener("click", function(event) {
        event.preventDefault ();
        ArrowDown.classList.add("active");
        ArrowUP.classList.remove("active");
    });
}