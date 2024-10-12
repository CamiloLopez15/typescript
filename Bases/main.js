"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveWorld() {
            return "Mundo salvado";
        }
    }
    class Villian extends Mutant {
        conquerWorld() {
            return "Mundo consquistado";
        }
    }
    const wolwerine = new Xmen("Wolwerine", "Logan");
    console.log(wolwerine);
})();
(() => {
    class Avenger {
        constructor(name, team, realtime) {
            this.name = name;
            this.team = team;
            this.realtime = realtime;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        static getAvgAge() {
            return this.name;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realtime) {
            this.name = name;
            this.realtime = realtime;
            console.log("Constructor de Avenger llamado");
        }
        getFullName() {
            return `${this.name} ${this.realtime}`;
        }
        getFullNamePrivate() {
            return `${this.name} ${this.realtime}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realtime, isMutant) {
            super(name, realtime);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realtime}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
})();
//# sourceMappingURL=main.js.map