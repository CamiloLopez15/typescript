(() => {
    abstract class Mutant {
        constructor(public name: string, public realName: string) {}
    }

    class Xmen extends Mutant {
        public saveWorld() {
            return "Mundo salvado";
        }
    }
    class Villian extends Mutant {
        public conquerWorld() {
            return "Mundo consquistado";
        }
    }

    const wolwerine = new Xmen("Wolwerine", "Logan");
    // console.log(wolwerine);

    const printName = (character: Mutant) => {
        console.log(character.name);
    };

    // printName(wolwerine);
})();
