import { genericArrowFunction } from "../generics/generics";
import { Hero } from "../interfaces";

const deadpool = {
    dangerLevel: 130,
    name: "Deadpool",
    realName: "Wade Winston Wilson",
};

console.log(genericArrowFunction<Hero>(deadpool));

