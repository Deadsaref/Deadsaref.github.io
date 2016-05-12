var MapPopup = document.querySelector(".map");
var MapClose = document.querySelector(".map .form-close");
var MapShow = document.querySelector(".map-show");

MapShow.addEventListener("click", function (event) {
    event.preventDefault ();
    MapPopup.classList.add("map-popup-show");
});
MapClose.addEventListener("click", function (event) {
    event.preventDefault ();
    MapPopup.classList.remove("map-popup-show");
})