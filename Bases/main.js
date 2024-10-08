"use strict";
const msg = "Hola mundo";
console.log(msg);
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || "----"}`;
        else
            return `${firstName} ${lastName || "----"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    let myFunction;
    myFunction = addNumbers;
    const sum = myFunction(1, 3);
    console.log(sum);
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada!!!';
    };
    const heroName = returnName();
})();
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
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        powers: ["Super velocidad", "Super fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = "Camilo";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Camilo",
        age: 18,
        powers: ["Volar"],
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    avenger = 150.2313123;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 1, 1, 1, 1, 2, 3, 23, 2];
    const villains = ["Omega Rojo", "Dormammu", "Duende Verde", "DOOM"];
    villains.forEach((v) => console.log(v.toLocaleUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isBatman });
})();
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
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    error('Auxilio!!!!');
})();
(() => {
    const nada = undefined;
    console.log(nada);
})();
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
(() => {
    const batman = "Batman";
    const linternaVerde = "Linterna verde";
    const volcanNegro = `Héroe: Volcán negro`;
    console.log({ batman });
})();
(() => {
    const hero = ["Dr. Strange", 100];
    hero[0] = "Iron-man";
    hero[1] = 70;
    console.log({ hero });
})();
(() => {
    function CallBatman() { }
    const CallSuperman = () => { };
    CallBatman();
    CallSuperman();
})();
//# sourceMappingURL=main.js.map