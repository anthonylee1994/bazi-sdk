import {陰陽類} from "../types/陰陽類";

type Value = "陰" | "陽";

export class 陰陽 {
    public static readonly valueMap: Readonly<Record<Value, 陰陽>> = {
        陰: new 陰陽(陰陽類.陰),
        陽: new 陰陽(陰陽類.陽),
    };

    private constructor(private readonly value: 陰陽類) {}

    public static of(value: Value): 陰陽 {
        return 陰陽.valueMap[value];
    }

    public get name(): string {
        return 陰陽類[this.value];
    }
}
