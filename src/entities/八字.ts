import {天干} from "./天干";
import {地支} from "./地支";
import {PaiPan} from "../lib/paipan";
import {Gender} from "../types/Gender";

export class 八字 {
    private constructor(public readonly gender: Gender, public readonly 天干組: 天干[], public readonly 地支組: 地支[]) {}

    public static of(gender: Gender, year: number, month: number, day: number, hour: number, minute: number): 八字 {
        const paipan = new PaiPan().fatemaps(gender, year, month, day, hour, minute, 0, 114, 5) as any;

        console.log(paipan);

        return new 八字(gender, (paipan.ctg || []).map(天干.of), (paipan.cdz || []).map(地支.of));
    }
}
