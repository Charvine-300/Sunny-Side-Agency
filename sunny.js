function setUp() {
    var menu = document.getElementById("menuflex");
    var button = document.getElementById("menu");

    //Giving the menu box a maximum height for functionality to work
    menu.setAttribute("style", "max-height: 18px");

    button.onclick = function() {
        if (menu.style.maxHeight == "18px") {
            menu.style.maxHeight = "373px";
        }

        else {
            menu.style.maxHeight = "18px";
        }
    }


}


window.onload = function() {
    setUp();
}