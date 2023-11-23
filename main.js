let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

windows.onscroll = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var body =
        "Name: " +
        name +
        "<br/> Email: " +
        email +
        "<br/> Subject: " +
        subject +
        "<br/> Message: " +
        message;

    Email.send({
        SecureToken: "6f26424c-2fa8-470e-9a60-0c8300eee07e",
        To: "martabak.uunyu@gmail.com",
        From: "unyuu.martabak@gmail.com",
        Subject: "Contact Message",
        Body: body,
    }).then((message) => alert(message));
});
