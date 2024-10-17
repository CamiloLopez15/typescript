function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) return printToConsole;
    else return () => {};
};

const blockPrototipe = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error(
                    "El id del pokemon debe estar entre 1 y 800"
                );
            } else {
                return originalMethod(id);
            }
        };
    };
}

function readonly(isWriteable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        const description: PropertyDescriptor = {
            get() {
                return "Fernando";
            },
            set(this, value) {
                Object.defineProperty(this, propertyKey, {
                    value,
                    writable: !isWriteable,
                    enumerable: false
                });
            },
        };
    };
}

@blockPrototipe
@printToConsoleConditional(true)
export class Pokemon {
    @readonly()
    public publicApi: string = "https://pokeapi.co";
    constructor(public name: string) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en DB ${id}`);
    }

    deletePokemonToDB(id: number) {
        console.log(`Pokemon eliminado de la DB ${id}`);
    }
}
