var elem = document.querySelector("header");
var headroom = new Headroom(elem, {
    "offset": 300,
    "tolerance": 5,
    "classes": {
        "initial": "animated",
        "notTop": "flipInX",
        "pinned": "slideOutUp",
        "top": "hide"
    }
});
headroom.init();
// to destroy
headroom.destroy();



