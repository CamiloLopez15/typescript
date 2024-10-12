(() => {
    class Apocalpisis {
        static instance: Apocalpisis;

        private constructor(public name: string) {}

        static callApocalipsis(): Apocalpisis {
            if (!this.instance) {
                Apocalpisis.instance = new Apocalpisis("Soy Apocaplisis");
            }
            return Apocalpisis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalpisis1 = Apocalpisis.callApocalipsis();
    const apocalpisis2 = Apocalpisis.callApocalipsis();
    const apocalpisis3 = Apocalpisis.callApocalipsis();

    apocalpisis1.changeName("Rodolfo");

    console.log({ apocalpisis1, apocalpisis2, apocalpisis3 });
})();
