var LinkWriteUs = document.querySelector(".btn-write");
var WriteWindow = document.querySelector(".write-us");
var WriteUSFormClose = document.querySelector(".write-us .form-close");

LinkWriteUs.addEventListener("click", function (event) {
    event.preventDefault();
    WriteWindow.classList.add("write-us-show");
});
WriteUSFormClose.addEventListener("click", function (event) {
    event.preventDefault();
    WriteWindow.classList.remove("write-us-show");
});