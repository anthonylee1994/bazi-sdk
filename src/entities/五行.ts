import {五行類} from "../types/五行類";

type Value = "木" | "火" | "土" | "金" | "水";

export class 五行 {
    public static readonly valueMap: Readonly<Record<Value, 五行>> = {
        木: new 五行(五行類.木),
        火: new 五行(五行類.火),
        土: new 五行(五行類.土),
        金: new 五行(五行類.金),
        水: new 五行(五行類.水),
    };

    private constructor(private readonly value: 五行類) {}

    public static of(value: Value): 五行 {
        return 五行.valueMap[value];
    }

    public get name(): string {
        return 五行類[this.value];
    }
}
