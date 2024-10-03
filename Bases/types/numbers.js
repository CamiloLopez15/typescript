"use strict";
(() => {
    let avengers;
    const villains = 20;
    avengers = Number("55");
    if (avengers < villains)
        console.log("Estamos en problemas");
    else
        console.log("Nos salvamos");
    console.log({ avengers });
})();
