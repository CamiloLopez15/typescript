"use strict";
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
        getFullNameFromXmen() {
            console.log();
        }
    }
    const wolwerine = new Xmen("Wolwerine", "Logan", true);
    console.log(wolwerine);
})();
//# sourceMappingURL=main.js.map