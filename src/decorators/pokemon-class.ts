
function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    // return () => console.log('Hey There!');
    if (print) {
        return printToConsole;
    }
    else {
        return () => { };
    }
}

const blockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log({ target, propertyKey, descriptor });
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('The pokemo ID must be between 1 and 800');
            }
            else {
                return originalMethod(id);
            }
        }
    }
}

function readonly(isWritable: boolean = true): Function {
    return function (taget: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Fulano';
            },
            set(this, val) {
                // console.log(this, value);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                });
            }
        }

        return descriptor;
    }
}

@blockPrototype
// @printToConsole
@printToConsoleConditional(false)
export class Pokemon {

    @readonly(false)
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) { }

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon saved in DB ${id}`);
    }
}