import {天干類} from "../types/天干類";
import {五行} from "./五行";
import {陰陽} from "./陰陽";

type Value = "甲" | "乙" | "丙" | "丁" | "戊" | "己" | "庚" | "辛" | "壬" | "癸";

export class 天干 {
    public static readonly valueMap: Readonly<Record<Value, 天干>> = {
        甲: new 天干(天干類.甲),
        乙: new 天干(天干類.乙),
        丙: new 天干(天干類.丙),
        丁: new 天干(天干類.丁),
        戊: new 天干(天干類.戊),
        己: new 天干(天干類.己),
        庚: new 天干(天干類.庚),
        辛: new 天干(天干類.辛),
        壬: new 天干(天干類.壬),
        癸: new 天干(天干類.癸),
    };

    private constructor(private readonly value: 天干類) {}

    public static of(value: Value): 天干 {
        return 天干.valueMap[value];
    }

    get 陰陽(): 陰陽 {
        switch (this.value) {
            case 天干類.甲:
            case 天干類.丙:
            case 天干類.戊:
            case 天干類.庚:
            case 天干類.壬:
                return 陰陽.of("陽");
            case 天干類.乙:
            case 天干類.丁:
            case 天干類.己:
            case 天干類.辛:
            case 天干類.癸:
                return 陰陽.of("陰");
        }
    }

    get 五行(): 五行 {
        switch (this.value) {
            case 天干類.甲:
            case 天干類.乙:
                return 五行.of("木");
            case 天干類.丙:
            case 天干類.丁:
                return 五行.of("火");
            case 天干類.戊:
            case 天干類.己:
                return 五行.of("土");
            case 天干類.庚:
            case 天干類.辛:
                return 五行.of("金");
            case 天干類.壬:
            case 天干類.癸:
                return 五行.of("水");
        }
    }

    get name(): string {
        return 天干類[this.value];
    }

    get fullName(): string {
        return `${this.name}${this.五行.name}`;
    }
}
