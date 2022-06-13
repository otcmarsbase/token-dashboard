import { BigNumber } from "ethers";
import React from "react";

export const roundings = {
    to6signDig: (x: number | BigNumber | string) => {
        const stringX = x.toString()
        if (!stringX.includes('.')) return stringX /* если число не дробное - форматировать нечего */
        const full = stringX.match(/^[1-9]{6,}/) /* если цифр до зяпятой больше 6, вернуть все, что до запятой */
        if (full) {
            return full[0]
        }
        const res = stringX.match(/(0?\.?)*(\d\.?){1,6}/) /* иначе ищем первые 6 (или меньше, если всего < 6 знаков) значащих цифр */
        if (res) return res[0]
        else {
            throw new Error('Rounding error')
        }
    },
    to2afterComma: (x: number | BigNumber | string) => {
        const stringX = x.toString()
        if (!stringX.includes('.')) return stringX
        const res = stringX.match(/\d*\.\d{0,2}/)
        if (res) return res[0]
        else {
            throw new Error('Rounding error')
        }
    }

}

export const RoundingContext = React.createContext({ roundings })