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
