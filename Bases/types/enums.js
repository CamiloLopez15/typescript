"use strict";
(() => {
    let Games;
    (function (Games) {
        Games["ROL"] = "role";
        Games["SIMULATOR"] = "simulator";
        Games["ACTION"] = "acci\u00F3n";
    })(Games || (Games = {}));
    let game = Games.ACTION;
    game = Games.ROL;
})();
