"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        powers: ["Super velocidad", "Super fuerza"],
        getName() {
            return this.name;
        },
    };
})();
