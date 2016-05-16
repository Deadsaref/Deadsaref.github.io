var LinkWriteUs = document.querySelector(".btn-write");
var WriteWindow = document.querySelector(".write-us");
var WriteUSFormClose = document.querySelector(".write-us .form-close");
var Form = document.querySelector(".write-us form");
var Name = document.querySelector(".write-us [name=name]");
var Pass = document.querySelector(".write-us [name=e-mail]");
var Message = document.querySelector(".write-us [name=message]");

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