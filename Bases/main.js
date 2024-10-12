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
    const printName = (character) => {
        console.log(character.name);
    };
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
(() => {
    class Apocalpisis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!this.instance) {
                Apocalpisis.instance = new Apocalpisis("Soy Apocaplisis");
            }
            return Apocalpisis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalpisis1 = Apocalpisis.callApocalipsis();
    const apocalpisis2 = Apocalpisis.callApocalipsis();
    const apocalpisis3 = Apocalpisis.callApocalipsis();
    apocalpisis1.changeName("Rodolfo");
    console.log({ apocalpisis1, apocalpisis2, apocalpisis3 });
})();
//# sourceMappingURL=main.js.map