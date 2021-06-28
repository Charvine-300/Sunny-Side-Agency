function setUp() {
    var menu = document.getElementById("menuflex");
    var button = document.getElementById("menu");
    var chan = document.getElementById("trina");
    var card = document.getElementById("bardy");

    //Giving the menu box a maximum height for functionality to work
    menu.setAttribute("style", "max-height: 40px");

    button.onclick = function() {
        if (menu.style.maxHeight == "40px") {
            menu.style.maxHeight = "385px";
        }

        else {
            menu.style.maxHeight = "40px";
        }
    }

    console.log(self.innerWidth);
    console.log(document.body.clientWidth);

    if (document.body.clientWidth > 375) {
        button.style.marginLeft = `${document.body.clientWidth - 55}px`;
        chan.style.marginLeft = `${document.body.clientWidth - 61}px`;
        card.style.marginLeft = `${document.body.clientWidth - 355}px`;

    }

    else if (document.body.clientWidth < 375) {
        button.style.marginLeft = `${document.body.clientWidth - 55}px`;
        chan.style.marginLeft = `${document.body.clientWidth - 61}px`;
        card.style.marginLeft = `${document.body.clientWidth - 355}px`;
    }

    else {
        button.style.marginLeft = "320px";
        chan.style.marginLeft = "314px";
        card.style.marginLeft = "20px";
    }


}


window.onload = function() {
    setUp();
}