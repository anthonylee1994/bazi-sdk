import {八字} from "./entities/八字";
import {地支} from "./entities/地支";
import {天干} from "./entities/天干";
import {Gender} from "./types/Gender";

console.log(天干.of("庚").fullName);
console.log(地支.of("辰").fullName);
console.log(八字.of(Gender.MALE, 1994, 4, 24, 17, 25));
