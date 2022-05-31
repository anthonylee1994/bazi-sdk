import {地支類} from "../types/地支類";
import {五行} from "./五行";

type Value = "子" | "丑" | "寅" | "卯" | "辰" | "巳" | "午" | "未" | "申" | "酉" | "戌" | "亥";

export class 地支 {
    public static readonly valueMap: Readonly<Record<Value, 地支>> = {
        子: new 地支(地支類.子),
        丑: new 地支(地支類.丑),
        寅: new 地支(地支類.寅),
        卯: new 地支(地支類.卯),
        辰: new 地支(地支類.辰),
        巳: new 地支(地支類.巳),
        午: new 地支(地支類.午),
        未: new 地支(地支類.未),
        申: new 地支(地支類.申),
        酉: new 地支(地支類.酉),
        戌: new 地支(地支類.戌),
        亥: new 地支(地支類.亥),
    };

    private constructor(private readonly value: 地支類) {}

    public static of(value: Value): 地支 {
        return 地支.valueMap[value];
    }

    get 五行(): 五行 {
        switch (this.value) {
            case 地支類.寅:
            case 地支類.卯:
                return 五行.of("木");
            case 地支類.巳:
            case 地支類.午:
                return 五行.of("火");
            case 地支類.辰:
            case 地支類.戌:
            case 地支類.丑:
            case 地支類.未:
                return 五行.of("土");
            case 地支類.申:
            case 地支類.酉:
                return 五行.of("金");
            case 地支類.亥:
            case 地支類.子:
                return 五行.of("水");
        }
    }

    get name(): string {
        return 地支類[this.value];
    }

    get fullName(): string {
        return `${this.name}${this.五行.name}`;
    }
}
