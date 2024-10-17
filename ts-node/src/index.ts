import { getPokemon } from "./generics/get-pokemon";

getPokemon(1)
    .then((res) => console.log(res.sprites.front_default))
    .catch((rej) => console.log(rej))
    .finally(() => console.log("GetPokemon finalizado"));
