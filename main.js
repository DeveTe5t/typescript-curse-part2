var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("interfaces/pokemon", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("generics/get-pokemon", ["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPokemon = void 0;
    axios_1 = __importDefault(axios_1);
    const getPokemon = async (pokemonId) => {
        // console.log('Hey from getPokemon!');
        // if (true) throw new Error('Help!');
        // const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const { data } = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        // console.log(response.data);
        // return response.data;
        return data;
    };
    exports.getPokemon = getPokemon;
});
define("index", ["require", "exports", "generics/get-pokemon"], function (require, exports, get_pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // console.log(getPokemon());
    (0, get_pokemon_1.getPokemon)(4)
        .then(pokemon => console.log(pokemon))
        .catch(error => console.error(error))
        .finally(() => console.log('End of getPokemon!'));
});
define("interfaces/hero", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/villian", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("generics/generics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericFunctionArrow = exports.genericFunction = exports.printObject = void 0;
    const printObject = (argument) => {
        console.log(argument);
    };
    exports.printObject = printObject;
    function genericFunction(argument) {
        return argument;
    }
    exports.genericFunction = genericFunction;
    const genericFunctionArrow = (argument) => argument;
    exports.genericFunctionArrow = genericFunctionArrow;
});
// import { Hero } from "../classes/Hero";
// // import { Hero as SuperHero, Hero2 } from "../classes/Hero";
// // import * as HeroClasses from "../classes/Hero";
// // import { powers } from "../data/powers";
// // import powers from "../data/powers";
define("backs/generics", ["require", "exports", "generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // // const Hero = 123;
    // // const ironman = new SuperHero('Ironman', 1, 55);
    // const ironman = new Hero('Ironman', 1, 55);
    // console.log(ironman);
    // console.log(ironman.power);
    console.log('-- Generic arguments');
    (0, generics_1.printObject)('Hey there!');
    (0, generics_1.printObject)(345);
    (0, generics_1.printObject)({ a: 1, b: 2, c: 3 });
    (0, generics_1.printObject)([1, 2, 3, 4, 5]);
    (0, generics_1.printObject)(new Date());
    (0, generics_1.printObject)(true);
    console.log('-- Generic traditional function');
    console.log((0, generics_1.genericFunction)(3.141519).toFixed(2));
    console.log((0, generics_1.genericFunction)('Heya').toUpperCase());
    console.log((0, generics_1.genericFunction)(new Date()).getDay());
    console.log('-- Generic arrow function');
    console.log((0, generics_1.genericFunctionArrow)(3.141519).toFixed(2));
    console.log((0, generics_1.genericFunctionArrow)('Heya').toUpperCase());
    console.log((0, generics_1.genericFunctionArrow)(new Date()).getDate());
    console.log('-- Generic example of use');
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool).realName);
    console.log((0, generics_1.genericFunctionArrow)(deadpool).dangerLevel);
    console.log('-- Generic interfaces exportations agrupation');
});
define("data/powers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export const powers: Power[] = [
    const powers = [
        {
            id: 1,
            description: 'Money',
        },
        {
            id: 2,
            description: 'Drugs',
        }
    ];
    exports.default = powers;
});
define("classes/Hero", ["require", "exports", "data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.myName = exports.PI = exports.Hero4 = exports.Hero3 = exports.Hero2 = exports.Hero = void 0;
    powers_1 = __importDefault(powers_1);
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = powers_1.default.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.description) || 'Not found';
        }
    }
    exports.Hero = Hero;
    class Hero2 {
    }
    exports.Hero2 = Hero2;
    class Hero3 {
    }
    exports.Hero3 = Hero3;
    class Hero4 {
    }
    exports.Hero4 = Hero4;
    exports.PI = 3.1416;
    exports.myName = 'Jhon Fulano';
});
define("interfaces/pokemon copy", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
