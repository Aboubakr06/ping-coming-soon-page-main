
let EmailInp = document.getElementById("email-inp");
let EmailCont = document.querySelector(".email__input");
let ErrorEl = document.querySelector(".error");
let ValidMsg = document.querySelector(".valid-msg");
let ButtonEl = document.getElementById("email-button");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

ButtonEl.addEventListener("click", function () {
    checkEmail()
});

function checkEmail() {
    if (!EmailInp.value.match(mailformat)) {
        EmailCont.style.border = "1px solid hsl(354, 100%, 66%)";
        ErrorEl.style.display = "block";
        ValidMsg.style.display = "none";
        
    } else {
        EmailCont.style.border = "1px solid var(--clr-Secondary-300)";
        ErrorEl.style.display = "none";
        ValidMsg.style.display = "block";
        EmailInp.value = "";
    }
}
