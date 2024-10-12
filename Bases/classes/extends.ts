(() => {
    class Avenger {
        constructor(public name: string, public realtime: string) {
            console.log("Constructor de Avenger llamado");
        }

        protected getFullName() {
            return `${this.name} ${this.realtime}`;
        }
        private getFullNamePrivate() {
            return `${this.name} ${this.realtime}`;
        }
    }

    class Xmen extends Avenger {
        constructor(name: string, realtime: string, public isMutant: boolean) {
            super(name, realtime);
        }

        public getFullNameFromXmen() {
          console.log();
        }
    }

    const wolwerine = new Xmen("Wolwerine", "Logan", true);
    console.log(wolwerine);
})();
