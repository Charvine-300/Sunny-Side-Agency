function setUp() {
    var menu = document.getElementById("menuflex");
    var button = document.getElementById("menu");
    var chan = document.getElementById("trina");
    var card = document.getElementById("bardy");
    var bangers = document.getElementById("header");
    var pone = document.getElementById("one");
    var owl = document.getElementById("two");
    var tree = document.getElementById("three");
    var tour = document.getElementById("four");
    var knive = document.getElementById("five");
    var pix = document.getElementById("six");
    var deven = document.getElementById("seven");
    var bait = document.getElementById("eight");

    //Giving the menu box a maximum height for functionality to work
    menu.setAttribute("style", "max-height: 40px");

    if (document.body.clientWidth >= 1024) {
        bangers.removeAttribute("src", "images/mobile/image-header.jpg");
        bangers.setAttribute("src", "images/desktop/image-header.jpg");

        pone.removeAttribute("src", "images/mobile/image-transform.jpg");
        pone.setAttribute("src", "images/desktop/image-transform.jpg");

        owl.removeAttribute("src", "images/mobile/image-stand-out.jpg");
        owl.setAttribute("src", "images/desktop/image-stand-out.jpg");

        tree.removeAttribute("src", "images/mobile/image-graphic-design.jpg");
        tree.setAttribute("src", "images/desktop/image-graphic-design.jpg");

        tour.removeAttribute("src", "images/mobile/image-photography.jpg");
        tour.setAttribute("src", "images/desktop/image-photography.jpg");

        knive.removeAttribute("src", "images/mobile/image-gallery-milkbottles.jpg");
        knive.setAttribute("src", "images/desktop/image-gallery-milkbottles.jpg");

        pix.removeAttribute("src", "images/mobile/image-gallery-orange.jpg");
        pix.setAttribute("src", "images/desktop/image-gallery-orange.jpg");

        deven.removeAttribute("src", "images/mobile/image-gallery-sugar-cubes.jpg");
        deven.setAttribute("src", "images/desktop/image-gallery-sugarcubes.jpg");

        bait.removeAttribute("src", "images/mobile/image-gallery-cone.jpg");
        bait.setAttribute("src", "images/desktop/image-gallery-cone.jpg");
    }

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