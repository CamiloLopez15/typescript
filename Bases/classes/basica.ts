(() => {
    class Avenger {
        // private name: string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;

        constructor(
            private name: string,
            public team: string,
            public realtime?: string
        ) {}

        public bio() {
            return `${this.name} (${this.team})`;
        }

        static getAvgAge() {
            return this.name;
        }
    }

    // const antman = new Avenger("Camilo", "Petroskus", "Roberto Carlos");
    // console.log(antman);
})();
